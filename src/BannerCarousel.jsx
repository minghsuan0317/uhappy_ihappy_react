import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function BannerCarousel() {
  const banners = [
    {
      id: 1,
      image: "src/assets/banner1.JPG",
      title: "澳洲藥妝好物 🇦🇺",
      subtitle: "點我看全文",
      link: "https://www.threads.com/@ming_0317/post/DT0Gx02Etid?xmt=AQF08RODDCBTK97jV4UmNgH4tK00EHPIbf7hRoMf1HrZdQ",
    },
    {
      id: 2,
      image: "src/assets/banner2.JPG",
      title: "腳跟磨皮器",
      subtitle: "點我看全文",
      link: "https://www.threads.com/@ming_0317/post/DT0Gx02Etid?xmt=AQF08RODDCBTK97jV4UmNgH4tK00EHPIbf7hRoMf1HrZdQ",
    },
    {
      id: 3,
      image: "src/assets/banner3.JPG",
      title: "塗抹的水光針",
      subtitle: "點我看全文",
      link: "https://www.threads.com/@ming_0317/post/DT0Gx02Etid?xmt=AQF08RODDCBTK97jV4UmNgH4tK00EHPIbf7hRoMf1HrZdQ",
    },
    {
      id: 4,
      image: "src/assets/banner4.JPG",
      title: "國民護唇膏",
      subtitle: "點我看全文",
      link: "https://www.threads.com/@ming_0317/post/DT0Gx02Etid?xmt=AQF08RODDCBTK97jV4UmNgH4tK00EHPIbf7hRoMf1HrZdQ",
    },
  ];

  return (
    // 將寬度限制在 max-w-md，讓它看起來是直的
    <div className="max-w-md mx-auto px-4 py-12 relative z-20">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="rounded-[40px] shadow-xl overflow-hidden bg-white border-[6px] border-white"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <a
              href={banner.link ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className="flex flex-col bg-white h-[600px]">
                {/* 圖片區塊 */}
                <div className="flex-grow overflow-hidden">
                  <img
                    src={banner.image}
                    className="w-full h-full object-cover"
                    alt={banner.title}
                  />
                </div>

                {/* 文字區塊*/}
                <div className="p-8 text-center bg-white">
                  <h2 className="text-2xl font-black mb-1 font-genjyuu text-[#7B646F] tracking-wider">
                    {banner.title}
                  </h2>
                  <p className="text-sm text-gray-400 font-medium italic">
                    {banner.subtitle}
                  </p>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          color: #585cd1 !important;
          background: rgba(255, 255, 255, 0.8);
          width: 40px !important;
          height: 40px !important;
          border-radius: 50%;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 16px !important;
        }
        .swiper-pagination-bullet-active {
          background: #585cd1 !important;
          width: 20px !important;
          border-radius: 10px !important;
        }
      `}</style>
    </div>
  );
}
