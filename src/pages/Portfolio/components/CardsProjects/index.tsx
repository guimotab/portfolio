import { FaRegEye } from "react-icons/fa";
import { FindImages } from "../../../../shared/utils/FindImagesProjects";
import { useUpdateOpenImage } from "../../../../states/hooks/useUpdateOpenImage";
import { FaGithub } from "react-icons/fa";
import { StructureCardProject } from "../../../../interface/StructureCardsProjects";
import { IoMdDownload } from "react-icons/io";
import { MdSmartphone } from "react-icons/md";
import { MdComputer } from "react-icons/md";

function CardsProjects({ folder, imageName, qtdImagesInFolder,
	altProject, title, subtitle,
	linkViewProject, functionalities, linkViewCode,
	downloadApp, logosTechnologies, support }: StructureCardProject) {

	const setOpenImage = useUpdateOpenImage();

	function openImageOnScreen() {
		const body = document.getElementById('body')!;
		setOpenImage(FindImages.findImagesProjects(folder, imageName, qtdImagesInFolder));
		body.classList.add("overflow-y-hidden");
	}

	function handleDownloadApp(url: string) {
		const link = document.createElement('a');
		link.href = url;
		link.download = `${folder.toLocaleLowerCase()}.apk`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}


	return (
		<div className="flex flex-col gap-4 border border-cor-terciaria h-full rounded-lg bg-white dark:bg-cor-terciaria px-8 py-4 shadow-gray-600 dark:shadow-none shadow-lg lg:opacity-60 hover:opacity-100 hover:animate-growProjects">
			<div className="flex flex-col gap-2">
				<h2 className="font-semibold text-xl dark:text-gray-200">{title}</h2>
				<img src={`../images/${folder}/${imageName}.jpg`} alt={altProject} height={225} onClick={event => openImageOnScreen()} className="rounded-lg border-cor-terciaria dark:border-cor-darkHover border-2 dark:border-4 cursor-pointer hover:animate-shadowPopProject" />
			</div>
			<div className='flex flex-col gap-4 justify-between h-full'>
				<div className="flex flex-col gap-3">
					<p className="dark:text-gray-200">{subtitle}</p>
					<div>
						<p className="font-medium dark:text-gray-200">Funcionalidades:</p>
						<ul className="flex flex-col gap-1 px-7">
							{functionalities.map(functionality =>
								<li className="list-disc dark:text-gray-200">{functionality}</li>
							)}
						</ul>
					</div>
				</div>
				<div className='flex justify-between items-end'>
					<div className="flex flex-col gap-4">
						<div className='flex items-start gap-5'>
							{downloadApp ?
								<button onClick={event => handleDownloadApp(downloadApp)} className='flex items-center cursor-pointer gap-2 bg-cor-terciaria py-1 px-3 rounded-md hover:bg-cor-hover dark:bg-cor-darkSecundaria dark:hover:bg-cor-darkHover'>
									<IoMdDownload size={18} className="text-white dark:text-gray-200" />
									<p className="text-white text-sm font-medium">Baixar APK</p>
								</button> :
								<>
									<a href={linkViewProject} rel="noreferrer" target="_blank" className='flex items-center gap-2 bg-cor-terciaria py-1 px-3 rounded-md hover:bg-cor-hover dark:bg-cor-darkSecundaria dark:hover:bg-cor-darkHover'>
										<FaRegEye size={18} className="text-white dark:text-gray-200" />
										<p className="text-white text-sm font-medium">Visualizar</p>
									</a>
									<a href={linkViewCode} rel="noreferrer" target="_blank" className='flex items-center gap-2 bg-cor-terciaria py-1 px-3 rounded-md hover:bg-cor-hover dark:bg-cor-darkSecundaria dark:hover:bg-cor-darkHover'>
										<FaGithub size={18} className="text-white dark:text-gray-200" />
										<p className="text-white text-sm font-medium">Código</p>
									</a>
								</>}
						</div>
						<div className='flex flex-col'>
							<h2 className=" font-medium dark:text-gray-200">Tecnologias usadas:</h2>
							<div className='flex items-center'>
								{logosTechnologies.map((item, index) => <div key={index}>
									{item}
								</div>
								)}
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<p className="font-medium dark:text-gray-200">Suportado em:</p>
						<div className="flex items-end justify-center gap-2">
							<MdSmartphone size={30} className={`text-gray-400 dark:text-gray-200 ${support === "Celular" || support === "Responsivo" ? "" : "hidden"}`} />
							<MdComputer size={30} className={`text-gray-400 dark:text-gray-200 ${support === "Computador" || support === "Responsivo" ? "" : "hidden"}`} />
							{/* {support.map((item, index) => <div key={index} className="h-fit">
								<MdComputer size={30} className='text-gray-400 dark:text-gray-200' />
							</div>)} */}
						</div>
					</div>
				</div>
			</div>
		</div>

	);
}

export default CardsProjects