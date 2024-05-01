import { FaGithub, FaRegEye } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { MdSmartphone } from "react-icons/md";
import { MdComputer } from "react-icons/md";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ImagesProjects } from "@/classes/ImagesProjects";
import ICardProject from "@/interface/ICardProject";
import { AlertDialogHeader, AlertDialogFooter, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useTranslations } from "next-intl";
import ProjectCardOverlay from "./ProjectCard/ProjectCardOverlay";
import ProjectCard from "./ProjectCard/ProjectCardRoot";
import ProjectCardHeader from "./ProjectCard/ProjectCardHeader";
import ProjectCardContent from "./ProjectCard/ProjectCardContent";
import ProjectCardResume from "./ProjectCard/ProjectCardResume";
import ProjectCardFeatures from "./ProjectCard/ProjectCardFeatures";
import ProjectCardFooter from "./ProjectCard/ProjectCardFooter";
import ProjectCardUsedTechnologies from "./ProjectCard/ProjectCardUsedTechnologies";
import ProjectCardAvailableOn from "./ProjectCard/ProjectCardAvailableOn";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
	item: ICardProject
	setMouseOverProject: Dispatch<SetStateAction<string>>
}

const Project = ({ item, setMouseOverProject }: ProjectCardProps) => {
	const t = useTranslations('Projects');

	const [openImage, setOpenImage] = useState(false)
	const imageProject = ImagesProjects.getImages(item.slug, "first") as string
	const router = useRouter()

	function mouseEnterProject() {
		setMouseOverProject(item.title)
	}
	function mouseLeaveProject() {
		setMouseOverProject("")
	}

	function handleOpenImage() {
		const body = document.getElementsByTagName("body")[0]!
		body.classList.add("overflow-hidden")
		setOpenImage(true)
	}

	function handleDownloadApp(url: string) {
		const link = document.createElement('a');
		link.href = url;
		const folder = ImagesProjects.getFolderProject(item.slug)
		link.download = `${folder.name.toLocaleLowerCase()}.apk`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}

	function redirectProject(url: string) {
		window.open(url, "_blank")
	}

	return (
		<>
			<ProjectCardOverlay item={item} openImage={openImage} setOpenImage={setOpenImage} />
			<ProjectCard id={item.title}
				onMouseLeave={mouseLeaveProject}
				onMouseEnter={mouseEnterProject}>

				<ProjectCardHeader>
					<h2 className="font-semibold text-xl dark:text-gray-200">{`${item.title} ${item.comingSoon ? t("projectComingSoon") : ""}`}</h2>
					<img
						onClick={handleOpenImage}
						src={imageProject}
						alt={item.altProject} height={225}
						className="rounded-lg border-primary dark:border-cor-darkHover border-2 cursor-pointer" />
				</ProjectCardHeader>

				<ProjectCardContent>

					<ProjectCardResume>{t(item.resume)}</ProjectCardResume>

					<ProjectCardFeatures>
						<ul className="flex flex-col gap-1 px-7">
							{item.features.map(functionality =>
								<li key={functionality} className="list-disc dark:text-gray-200">{t(functionality)}</li>
							)}
						</ul>
					</ProjectCardFeatures>

					<div className='flex items-start gap-5'>
						{/* Botão de Donwload */}
						{item.downloadApp && !item.linkViewProject &&
							<Button
								onClick={event => handleDownloadApp(item.downloadApp!)}
								className='flex items-center cursor-pointer gap-2 bg-primary py-1.5 h-fit px-3 rounded-md dark:bg-cor-darkSecundaria dark:hover:bg-cor-darkHover'>
								<IoMdDownload size={18} className="text-white dark:text-gray-200" />
								<p className="text-white text-sm font-medium">{t("btnDownloadApk")}</p>
							</Button>
						}

						{/* Botão de View com Dialog */}
						{!item.downloadApp && item.needBackend && item.linkViewProject &&
							<AlertDialog>
								<AlertDialogTrigger asChild>
									<Button className="space-x-2 py-1.5 h-fit" >
										<FaRegEye size={18} className=" dark:text-gray-200" />
										<p className="text-white text-sm font-medium">{t("btnViewProject")}</p>
									</Button>
								</AlertDialogTrigger>
								<AlertDialogContent>
									<AlertDialogHeader>
										<AlertDialogTitle>{t("dialogTitle")}</AlertDialogTitle>
										<AlertDialogDescription>
											{t("dialogDescription1")}<br />
											<strong>{t("dialogDescription2")}</strong>
										</AlertDialogDescription>
									</AlertDialogHeader>
									<AlertDialogFooter>
										<AlertDialogCancel>{t("dialogBtnCancel")}</AlertDialogCancel>
										<AlertDialogAction onClick={() => redirectProject(item.linkViewProject!)}>
												{t("dialogBtnAction")}
										</AlertDialogAction>
									</AlertDialogFooter>
								</AlertDialogContent>
							</AlertDialog>
						}

						{/* Botão de View sem Dialog */}
						{!item.downloadApp && !item.needBackend && item.linkViewProject &&
							<Link href={item.linkViewProject!} target="_blank" rel="noreferrer">
								<Button className="space-x-2 py-1.5 h-fit" >
									<FaRegEye size={18} className=" dark:text-gray-200" />
									<p className="text-white text-sm font-medium">{t("btnViewProject")}</p>
								</Button>
							</Link>
						}

						{/* Botão de Code */}
						{item.linkViewCode &&
							<Link href={item.linkViewCode!} target="_blank" rel="noreferrer">
								<Button className="space-x-2 py-1.5 h-fit" variant={"outline"}>
									<FaGithub size={18} className=" dark:text-gray-200" />
									<p className=" text-sm font-medium">{t("btnViewCode")}</p>
								</Button>
							</Link>
						}

						{/* Botão Projeto em Desenvolvimento */}
						{item.comingSoon &&
							<>
								<Button className="space-x-2 py-1.5 h-fit" variant={"outline"} disabled>
									<FaRegEye size={18} className=" dark:text-gray-200" />
									<p className="text-white text-sm font-medium">{t("btnViewProject")}</p>
								</Button>
								<Button className="space-x-2 py-1.5 h-fit" variant={"outline"} disabled>
									<FaGithub size={18} className=" dark:text-gray-200" />
									<p className=" text-sm font-medium">{t("btnViewCode")}</p>
								</Button>
							</>
						}
					</div>

					<ProjectCardFooter>
						<ProjectCardUsedTechnologies>
							<ul className='flex items-center'>
								{item.logosTechnologies.map((item, index) =>
									<li key={index}>
										{item}
									</li>
								)}
							</ul>
						</ProjectCardUsedTechnologies>

						<ProjectCardAvailableOn>
							{(item.support === "Celular" || item.support === "Responsivo") &&
								<MdSmartphone size={30} className={`text-gray-400 dark:text-gray-200`} />}
							{(item.support === "Computador" || item.support === "Responsivo") &&
								<MdComputer size={30} className={`text-gray-400 dark:text-gray-200`} />}
						</ProjectCardAvailableOn>

					</ProjectCardFooter>

				</ProjectCardContent>
			</ProjectCard >
		</>

	);
}

export default Project