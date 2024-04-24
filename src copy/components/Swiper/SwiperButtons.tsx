import { useSwiper } from 'swiper/react';

interface SwiperButtonProps {
    text: string
}

export const SwiperButtonNext = ({ text }: SwiperButtonProps) => {
    const swiper = useSwiper();
    return <button onClick={() => swiper.slideNext()} className='px-5 py-1.5 bg-primary dark:bg-cor-darkSecundaria rounded-lg text-white font-medium'>{text}</button>;
};
export const SwiperButtonPrev = ({ text }: SwiperButtonProps) => {
    const swiper = useSwiper();
    return <button onClick={() => swiper.slidePrev()} className='px-5 py-1.5 bg-primary dark:bg-cor-darkSecundaria rounded-lg text-white font-medium'>{text}</button>;
};