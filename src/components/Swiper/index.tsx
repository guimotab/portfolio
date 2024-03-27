import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SwiperButtonNext, SwiperButtonPrev } from './SwiperButtons';
import { useUpdateOpenImage } from '../../states/hooks/useUpdateOpenImage';
// 9.4.1
interface SlideSwiperProps {
    photos: string[]
}

const SlideSwiper = ({ photos }: SlideSwiperProps) => {
    const setOpenImage = useUpdateOpenImage()
    function closeImageOnScreen(event: React.MouseEvent<HTMLDivElement, MouseEvent>, active: boolean = false) {
        const body = document.getElementById('body')!
        const divOutImgProjects = document.getElementById('divOutImg')!
        if (event.target === divOutImgProjects || active) {
            setOpenImage([""])
            body.classList.remove("overflow-y-hidden")
        }
    }
    return (
        <>
            {photos[0] !== "" ?
                <div onClick={event => closeImageOnScreen(event)} className='flex items-center justify-center z-20 fixed h-screen w-screen px-20'>
                    <div className="absolute bg-black opacity-50 h-screen w-screen" />
                    <div id="divOutImg" className="absolute backdrop-blur-sm h-screen w-screen" />
                    <div className='z-30'>
                        <Swiper
                            id="imgScreen"
                            spaceBetween={40}
                            slidesPerView={1}
                            pagination={{ clickable: false }}>
                            <div onClick={event => closeImageOnScreen(event, true)}
                                className='absolute right-[20.5rem] sm:right-44 md:right-28 lg:hidden top-0 text-white font-medium text-lg z-10'>X</div>
                            {photos.map((photo, index) =>
                                <SwiperSlide key={index} >
                                    <img src={`${photo}`} alt="" className='mb-4 rounded-lg px-[22rem] sm:px-52 md:px-40 lg:px-32 xl:px-0 dark:rounded-lg' />
                                </SwiperSlide>
                            )}
                            <div className='flex justify-center w-full'>
                                <div className='flex justify-between max-w-xs md:max-w-2xl w-full'>
                                    <SwiperButtonPrev text="Previous" />
                                    <SwiperButtonNext text="Next" />
                                </div>
                            </div>
                        </Swiper>
                    </div>
                </div>
                : <></>
            }
        </>
    )
};

export default SlideSwiper


// Virtual - Virtual Slides module
// Keyboard - Keyboard Control module
// Mousewheel - Mousewheel Control module
// Navigation - Navigation module
// Pagination - Pagination module
// Scrollbar - Scrollbar module
// Parallax - Parallax module
// FreeMode - Free Mode module
// Grid - Grid module
// Manipulation - Slides manipulation module (only for Core version)
// Zoom - Zoom module
// Controller - Controller module
// A11y - Accessibility module
// History - History Navigation module
// HashNavigation - Hash Navigation module
// Autoplay - Autoplay module
// EffectFade - Fade Effect module
// EffectCube - Cube Effect module
// EffectFlip - Flip Effect module
// EffectCoverflow - Coverflow Effect module
// EffectCards - Cards Effect module
// EffectCreative - Creative Effect module
// Thumbs - Thumbs module