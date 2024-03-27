import { BiCodeAlt } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa";
import { FindImages } from "../../../../shared/utils/FindImagesProjects";
import { useUpdateOpenImage } from "../../../../states/hooks/useUpdateOpenImage";


function CardsProjects({ folder, imageName, qtdImagesInFolder, altProject, title, subtitle, linkViewProject, linkViewCode, downloadApp, logosTechnologies, support }: StructureCardProject) {
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
				<p className="dark:text-gray-200">{subtitle}</p>
				<div className='flex justify-between items-end'>
					<div className="flex flex-col gap-4">
						<div className='flex items-start gap-5'>
							{downloadApp ?
								<button onClick={event => handleDownloadApp(downloadApp)} className='flex items-center cursor-pointer gap-2 bg-cor-terciaria py-1 px-3 rounded-md hover:bg-cor-hover dark:bg-cor-darkSecundaria dark:hover:bg-cor-darkHover'>
									<IoMdDownload size={18} className="text-white dark:text-gray-200" />
									<p className="text-white text-sm font-medium">Baixar APK</p>
								</button> :
								<>
									<a href={linkViewProject} target="_blank" className='flex items-center gap-2 bg-cor-terciaria py-1 px-3 rounded-md hover:bg-cor-hover dark:bg-cor-darkSecundaria dark:hover:bg-cor-darkHover'>
										<FaRegEye size={18} className="text-white dark:text-gray-200" />
										<p className="text-white text-sm font-medium">Visualizar</p>
									</a>
									<a href={linkViewCode} target="_blank" className='flex items-center gap-2 bg-cor-terciaria py-1 px-3 rounded-md hover:bg-cor-hover dark:bg-cor-darkSecundaria dark:hover:bg-cor-darkHover'>
										<FaGithub size={18} className="text-white dark:text-gray-200" />
										<p className="text-white text-sm font-medium">Ver no GitHub</p>
									</a>
								</>}
						</div>
						<div className='flex flex-col'>
							<h2 className=" font-medium">Tecnologias usadas:</h2>
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
							{support.map((item, index) => <div key={index} className="h-fit">{item}</div>)}
						</div>
					</div>
				</div>
			</div>
		</div>

    )
}

export default CardsProjects