import { useSwiper } from 'swiper/react';

interface SwiperButtonProps {
    text: string
}

export const SwiperButtonNext = ({ text }: SwiperButtonProps) => {
    const swiper = useSwiper();
    return <button onClick={() => swiper.slideNext()}>{text}</button>;
};
export const SwiperButtonPrev = ({ text }: SwiperButtonProps) => {
    const swiper = useSwiper();
    return <button onClick={() => swiper.slidePrev()}>{text}</button>;
};