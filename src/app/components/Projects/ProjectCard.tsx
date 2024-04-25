import { FaRegEye } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { MdSmartphone } from "react-icons/md";
import { MdComputer } from "react-icons/md";
import { StructureCardProject } from ".";
import { FindImages } from "@/classes/FindImages";
import { Dialog } from "@radix-ui/react-dialog";
import { DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Dispatch, HTMLAttributes, MutableRefObject, RefAttributes, SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ProjectCardProps {
	item: StructureCardProject
	setMouseOverProject: Dispatch<SetStateAction<string>>
}

const ProjectCard = ({ item, setMouseOverProject }: ProjectCardProps) => {

	const [openImage, setOpenImage] = useState(false)
	// function openImageOnScreen() {
	// 	const body = document.getElementById('body')!;
	// 	setOpenImage(FindImages.imagesProject(item.folder, item.imageName, qtdImagesInFolder));
	// 	body.classList.add("overflow-y-hidden");
	// }

	function mouseEnterProject() {
		setMouseOverProject(item.title)
	}
	function mouseLeaveProject() {
		setMouseOverProject("")
	}

	function handleOpenImage() {
		setOpenImage(true)
	}
	function handleCloseImage() {
		setOpenImage(false)
	}


	function handleDownloadApp(url: string) {
		const link = document.createElement('a');
		link.href = url;
		link.download = `${item.folder.toLocaleLowerCase()}.apk`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}

	return (
		<>
			{openImage &&
				<div className="fixed inset-0 z-50 bg-black/10" onClick={handleCloseImage}>
					<div className="relative left-[50%] top-[50%] z-50 ">
						<img
							src={`../images/${item.folder}/${item.imageName}.jpg`}
							alt={item.altProject}
							className="absolute translate-x-[-50%] translate-y-[-50%] rounded-lg w-[60rem] border-primary dark:border-cor-darkHover border-2 dark:border-4 cursor-pointer " />
					</div>
				</div>
			}
			<Card id={item.title}
				onMouseLeave={mouseLeaveProject}
				onMouseEnter={mouseEnterProject}
				className="transition duration-500 hover:scale-[1.02] z-0 flex flex-col gap-4 border h-full rounded-lg bg-white dark:bg-primary px-8 py-4 dark:shadow-none">
				<div className="flex flex-col gap-2">
					<h2 className="font-semibold text-xl dark:text-gray-200">{item.title}</h2>
					<img
						onClick={handleOpenImage}
						src={`../images/${item.folder}/${item.imageName}.jpg`}
						alt={item.altProject} height={225}
						className="rounded-lg border-primary dark:border-cor-darkHover border-2 dark:border-4 cursor-pointer " />
				</div>

				<div className='flex flex-col gap-4 justify-between h-full'>
					<div className="flex flex-col gap-3">
						<p className="dark:text-gray-200">{item.subtitle}</p>
						<div>
							<p className="font-medium dark:text-gray-200">Funcionalidades:</p>
							<ul className="flex flex-col gap-1 px-7">
								{item.functionalities.map(functionality =>
									<li className="list-disc dark:text-gray-200">{functionality}</li>
								)}
							</ul>
						</div>
					</div>


					<div className='flex justify-between items-end'>
						<div className="flex flex-col gap-4">
							<div className='flex items-start gap-5'>
								{item.downloadApp ?
									<button onClick={event => handleDownloadApp(item.downloadApp!)} className='flex items-center cursor-pointer gap-2 bg-primary py-1 px-3 rounded-md hover:bg-cor-hover dark:bg-cor-darkSecundaria dark:hover:bg-cor-darkHover'>
										<IoMdDownload size={18} className="text-white dark:text-gray-200" />
										<p className="text-white text-sm font-medium">Baixar APK</p>
									</button>
									:
									<>
										<Link href={item.linkViewProject!} target="_blank" rel="noreferrer">
											<Button className="space-x-2">
												<FaRegEye size={18} className="text-white dark:text-gray-200" />
												<p className="text-white text-sm font-medium">Visualizar</p>
											</Button>
										</Link>
										<Link href={item.linkViewCode!} target="_blank" rel="noreferrer">
											<Button className="space-x-2">
												<FaGithub size={18} className="text-white dark:text-gray-200" />
												<p className="text-white text-sm font-medium">Código</p>
											</Button>
										</Link>
									</>}
							</div>


							<div className='flex flex-col'>
								<h2 className=" font-medium dark:text-gray-200">Tecnologias usadas:</h2>
								<div className='flex items-center'>
									{item.logosTechnologies.map((item, index) =>
										<div key={index}>
											{item}
										</div>
									)}
								</div>
							</div>
						</div>


						<div className="flex flex-col gap-2">
							<p className="font-medium dark:text-gray-200">Suportado em:</p>
							<div className="flex items-end justify-center gap-2">
								<MdSmartphone size={30} className={`text-gray-400 dark:text-gray-200 ${item.support === "Celular" || item.support === "Responsivo" ? "" : "hidden"}`} />
								<MdComputer size={30} className={`text-gray-400 dark:text-gray-200 ${item.support === "Computador" || item.support === "Responsivo" ? "" : "hidden"}`} />
							</div>
						</div>
					</div>


				</div>
			</Card >
		</>

	);
}

export default ProjectCard