"use client";
import { Button } from "@heroui/react";
import { Autoplay, Pagination ,EffectFade} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Hero = () => {
    const heroData = [
        {
            image: "/banner.jpg",
            title: "Generate Your New Photo",
            buttonText: "View Photos",
            color: "primary",
        },
        {
            image: "/banner1.jpg",
            title: "Create Amazing AI Art",
            buttonText: "Start Creating",
            color: "secondary",
        },
        {
            image: "/banner2.jpg",
            title: "Design Your Future",
            buttonText: "Explore Now",
            color: "tertiary",
        },
    ];

    return (
        <div className="my-5 rounded-md overflow-hidden">
            <Swiper
                modules={[Autoplay, Pagination,EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                className="h-[400px] md:h-[500px] w-full"
            >
                {heroData.map((data, i) => (
                    <SwiperSlide key={i}>
                        <div
                            className="h-full w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
                            style={{ backgroundImage: `url("${data.image}")` }}
                        >
                            <div className="h-full w-full bg-black/40 flex items-center justify-center">
                                <div className="flex flex-col items-center justify-center text-center px-4">
                                    <h2 className="hero_content text-4xl md:text-6xl font-bold mb-6 text-white">{data.title}</h2>
                                    <Button className={` hero_button`} variant={data.color}  size="lg">
                                        {data.buttonText}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Hero;
