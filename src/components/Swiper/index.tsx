import { Swiper, SwiperSlide } from 'swiper/react';
import { ISwiperObject } from '../../shared/interfaces/ISwiperObject';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// 9.4.1
interface SlideSwiperProps {
    photos: ISwiperObject[]
}

const SlideSwiper = ({ photos }: SlideSwiperProps) => {
    return (
        <div className='flex w-full max-w-7xl'>
            <Swiper spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                id="divImgScreen"
                className='flex items-center justify-center'>
                {photos.map((photo, index) =>
                    <SwiperSlide key={index}>
                        <img id="imgScreen" src={photo.src} alt="" className='self-center px-20' />
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
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