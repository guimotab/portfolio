import { FaGithub, FaRegEye } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { MdSmartphone } from "react-icons/md";
import { MdComputer } from "react-icons/md";
import { Card } from "@/components/ui/card";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ImagesProjects } from "@/classes/ImagesProjects";
import ICardProject from "@/interface/ICardProject";
import { AlertDialogHeader, AlertDialogFooter, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import Overlay from "@/components/Overlay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
interface ProjectCardProps {
	item: ICardProject
	setMouseOverProject: Dispatch<SetStateAction<string>>
}

const ProjectCard = ({ item, setMouseOverProject }: ProjectCardProps) => {

	const [openImage, setOpenImage] = useState(false)
	const imageProject = ImagesProjects.getImages(item.slug, "first") as string
	const allImagesProject = ImagesProjects.getImages(item.slug, "all") as string[]

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
	function handleCloseImage() {
		const body = document.getElementsByTagName("body")[0]!
		body.classList.remove("overflow-hidden")
		setOpenImage(false)
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

	return (
		<>
			{openImage &&
				<Overlay closeOverlay={handleCloseImage}>
					<div className="z-60">
						<Carousel >
							<CarouselContent >
								{allImagesProject.map(image =>
									<CarouselItem>
										<img
											src={image}
											alt={item.altProject}
											className="rounded-lg  border-primary dark:border-cor-darkHover border-2 dark:border-4 cursor-pointer " />
									</CarouselItem>
								)}
							</CarouselContent>
							<CarouselPrevious className="z-60" />
							<CarouselNext className="z-60" />
						</Carousel>
					</div>
				</Overlay>
			}
			<Card id={item.title}
				onMouseLeave={mouseLeaveProject}
				onMouseEnter={mouseEnterProject}
				className="transition duration-500 hover:scale-[1.02] z-0 flex flex-col gap-4 border h-full rounded-lg px-8 py-4 ">
				<div className="flex flex-col gap-2">
					<h2 className="font-semibold text-xl dark:text-gray-200">{item.title}</h2>
					<img
						onClick={handleOpenImage}
						src={imageProject}
						alt={item.altProject} height={225}
						className="rounded-lg border-primary dark:border-cor-darkHover border-2 cursor-pointer" />
				</div>

				<div className='flex flex-col gap-4 justify-between h-full'>
					<div className="flex flex-col gap-3">
						<p className="dark:text-gray-200">{item.resume}</p>
						<div>
							<p className="font-medium dark:text-gray-200">Funcionalidades:</p>
							<ul className="flex flex-col gap-1 px-7">
								{item.functionalities.map(functionality =>
									<li key={functionality} className="list-disc dark:text-gray-200">{functionality}</li>
								)}
							</ul>
						</div>
					</div>



					<div className="flex flex-col gap-4">
						<div className='flex items-start gap-5'>

							{item.downloadApp ?
								<Button
									onClick={event => handleDownloadApp(item.downloadApp!)}
									className='flex items-center cursor-pointer gap-2 bg-primary py-1.5 h-fit px-3 rounded-md dark:bg-cor-darkSecundaria dark:hover:bg-cor-darkHover'>
									<IoMdDownload size={18} className="text-white dark:text-gray-200" />
									<p className="text-white text-sm font-medium">Baixar APK</p>
								</Button>
								:
								<>
									{item.needBackend ?
										<AlertDialog>
											<AlertDialogTrigger asChild>
												<Button className="space-x-2 py-1.5 h-fit" >
													<FaRegEye size={18} className=" dark:text-gray-200" />
													<p className="text-white text-sm font-medium">Visualizar</p>
												</Button>
											</AlertDialogTrigger>
											<AlertDialogContent>
												<AlertDialogHeader>
													<AlertDialogTitle>Aviso!</AlertDialogTitle>
													<AlertDialogDescription>
														Para que esse projeto funcione da maneira correta, o backend precisa estar rodando!<br />
														<strong>Clique no botão "Código" e siga os passos para rodar o backend.</strong>
													</AlertDialogDescription>
												</AlertDialogHeader>
												<AlertDialogFooter>
													<AlertDialogCancel>Voltar</AlertDialogCancel>
													<AlertDialogAction>
														<Link href={item.linkViewProject!} target="_blank" rel="noreferrer">
															Continuar
														</Link>
													</AlertDialogAction>
												</AlertDialogFooter>
											</AlertDialogContent>
										</AlertDialog>

										:
										<Link href={item.linkViewProject!} target="_blank" rel="noreferrer">
											<Button className="space-x-2 py-1.5 h-fit" >
												<FaRegEye size={18} className=" dark:text-gray-200" />
												<p className="text-white text-sm font-medium">Visualizar</p>
											</Button>
										</Link>
									}
								</>
							}
							<Link href={item.linkViewCode} target="_blank" rel="noreferrer">
								<Button className="space-x-2 py-1.5 h-fit" variant={"outline"}>
									<FaGithub size={18} className=" dark:text-gray-200" />
									<p className=" text-sm font-medium">Código</p>
								</Button>
							</Link>
						</div>

						<div className="flex justify-between items-end">
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


							<div className="flex flex-col gap-2">
								<p className="font-medium dark:text-gray-200">Disponível para:</p>
								<div className="flex items-end justify-center gap-2">
									<MdSmartphone size={30} className={`text-gray-400 dark:text-gray-200 ${item.support === "Celular" || item.support === "Responsivo" ? "" : "hidden"}`} />
									<MdComputer size={30} className={`text-gray-400 dark:text-gray-200 ${item.support === "Computador" || item.support === "Responsivo" ? "" : "hidden"}`} />
								</div>
							</div>
						</div>
					</div>


				</div>
			</Card >
		</>

	);
}

export default ProjectCard