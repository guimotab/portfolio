import { Swiper, SwiperSlide } from 'swiper/react';
import { ISwiperObject } from '../../shared/interfaces/ISwiperObject';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SwiperButtonNext, SwiperButtonPrev } from './SwiperButtons';
// 9.4.1
interface SlideSwiperProps {
    photos: ISwiperObject[]
    closeImageOnScreen: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const SlideSwiper = ({ photos, closeImageOnScreen }: SlideSwiperProps) => {
    return (
        <>
            <div className="fixed backdrop-blur-sm h-screen w-screen z-20"></div>
            <div id='divCloseImage' className="fixed bg-black opacity-50 h-screen w-screen z-20"></div>
            <div id="divCloseImage" onClick={event => closeImageOnScreen(event)} className='absolute flex items-center justify-center z-30 left-0 top-60 h-screen w-screen'>
                {/* <div className='rounded-lg xl:border-cor-terciaria px-8 md:px-20 xl:px-0 xl:border-2 dark:border-none dark:rounded-lg'> */}
                <Swiper
                    id="imgScreen"
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: false }}
                    className='w-[80rem]'>
                    <SwiperButtonPrev text="Previous" />
                    {photos.map((photo, index) =>
                        <SwiperSlide key={index}>
                            <img src={photo.src} alt="" className='rounded-lg xl:border-cor-terciaria px-8 md:px-20 xl:px-0 xl:border-2 dark:border-none dark:rounded-lg' />
                        </SwiperSlide>
                    )}
                    <SwiperButtonNext text="Next" />
                </Swiper>
                {/* </div> */}
            </div>
        </>
    );
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