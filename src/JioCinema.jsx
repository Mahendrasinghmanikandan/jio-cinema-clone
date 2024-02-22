import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { FaChevronLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const App = () => {
    return (
        <div className="w-screen h-screen bg-gradient-to-b from-[#082439] to-[#0c0f13] flex items-center">
            <Swiper
                className="h-[70vh] w-full py-10 relative"
                loop
                slidesPerView={3}
                spaceBetween={10}
                modules={[Navigation, Autoplay]}
                autoplay
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                }}
                centeredSlides
                speed={1000}
            >
                {[
                    "https://v3img.voot.com/jioimage/newcpp/656a132f7d3d387f1b638a4d/656a132f7d3d387f1b638a4d_1701450564700_aa.jpg",
                    "https://v3img.voot.com/resizeMedium,w_1090,h_613/v3Storage/assets/sports_zone_cricket_horizontal-1695032322122.jpg",
                    "https://library.sportingnews.com/styles/twitter_card_120x120/s3/2023-05/Arshdeep%20Singh%20Punjab%20Kings%2005052023.jpeg?itok=lcriUwI4",
                    "https://v3img.voot.com/resizeMedium,w_960,h_540/jioimage/newcpp/65b7997a5526e4c939dc9983/65b7997a5526e4c939dc9983_1706531204519_aa.jpg",
                    "https://v3img.voot.com/jioimage/newcpp/656a132f7d3d387f1b638a4d/656a132f7d3d387f1b638a4d_1701450564700_aa.jpg",
                    "https://v3img.voot.com/resizeMedium,w_1090,h_613/v3Storage/assets/sports_zone_cricket_horizontal-1695032322122.jpg",
                    "https://library.sportingnews.com/styles/twitter_card_120x120/s3/2023-05/Arshdeep%20Singh%20Punjab%20Kings%2005052023.jpeg?itok=lcriUwI4",
                    "https://v3img.voot.com/resizeMedium,w_960,h_540/jioimage/newcpp/65b7997a5526e4c939dc9983/65b7997a5526e4c939dc9983_1706531204519_aa.jpg",
                ].map((res, index) => {
                    return (
                        <SwiperSlide
                            key={index}
                            className=" h-[60vh] transition-all duration-1000"
                        >
                            <img
                                src={res}
                                alt=""
                                className="h-[60vh] rounded-2xl"
                            />
                        </SwiperSlide>
                    );
                })}
                <div className="absolute bottom-14 right-28">
                    <div className="swiper-button-prev swiper_buttons">
                        <FaAngleRight className="navigation_buttons" />
                    </div>
                    <div className="swiper-button-next swiper_buttons">
                        <FaChevronLeft className="navigation_buttons" />
                    </div>
                </div>
            </Swiper>
        </div>
    );
};

export default App;
