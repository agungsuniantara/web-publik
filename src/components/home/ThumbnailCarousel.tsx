'use client';

import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ThumbnailCarousel() {
    const [isClient, setIsClient] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [mainSlider, setMainSlider] = useState<Slider | null>(null);
    const [navSlider, setNavSlider] = useState<Slider | null>(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const settingsFor = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: navSlider ?? undefined,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: true,
                },
            },
        ],
    };

    const settingsNav = {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: mainSlider ?? undefined,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        beforeChange: (_oldIndex: number, newIndex: number) => setActiveIndex(newIndex),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    focusOnSelect: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    focusOnSelect: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    focusOnSelect: true,
                },
            },
        ],
    };

    useEffect(() => {
        if (mainSlider) {
            mainSlider.slickGoTo(activeIndex);
        }
    }, [activeIndex, mainSlider]);

    if (!isClient) {
        return (
            <div className="h-64 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
        );
    }

    return (
        <div>
            <Slider {...settingsFor} ref={setMainSlider} className="pb-3">
                <div>
                    <img
                        src="/images/slider/1.webp"
                        alt="Uma Coding Bali coding bootcamp classroom"
                        className="h-auto w-full rounded-lg"
                    />
                </div>
                <div>
                    <img
                        src="/images/slider/4.webp"
                        alt="Uma Coding Bali students learning programming"
                        className="h-auto w-full scale-x-[-1] rounded-lg"
                    />
                </div>
                <div>
                    <img
                        src="/images/slider/3.webp"
                        alt="Uma Coding Bali coding class for kids"
                        className="h-auto w-full rounded-lg"
                    />
                </div>
                <div>
                    <img
                        src="/images/slider/4.webp"
                        alt="Uma Coding Bali hands-on coding workshop"
                        className="h-auto w-full rounded-lg"
                    />
                </div>
            </Slider>
            <Slider {...settingsNav} ref={setNavSlider} className="thumb">
                <div>
                    <img
                        src="/images/slider/1.webp"
                        alt="Thumbnail classroom"
                        className="h-auto w-full rounded-lg"
                    />
                </div>
                <div>
                    <img
                        src="/images/slider/4.webp"
                        alt="Thumbnail learning session"
                        className="h-auto w-full scale-x-[-1] rounded-lg"
                    />
                </div>
                <div>
                    <img
                        src="/images/slider/3.webp"
                        alt="Thumbnail kids class"
                        className="h-auto w-full rounded-lg"
                    />
                </div>
                <div>
                    <img
                        src="/images/slider/4.webp"
                        alt="Thumbnail workshop"
                        className="h-auto w-full rounded-lg"
                    />
                </div>
            </Slider>
        </div>
    );
}
