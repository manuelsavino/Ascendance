import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Button } from "../components/common/layout"
import Summer1 from "../images/summer1.jpg"
import Summer2 from "../images/summer2.jpg"
import "swiper/swiper-bundle.css"
import { Swiper, SwiperSlide } from "swiper/react"
import Parent from "../images/parents.jpeg"
import Studio from "../images/studio.jpeg"
import Staff from "../images/staff.jpeg"

const SummerInfo = () => {
  return (
    <Layout hidefreeflass={true} hero={false}>
      <Seo title="Summer Info" />
      <div className="container mx-auto flex justify-center flex-col items-center md:flex-row space-y-2 md:space-y-0 md:space-x-2 pt-10">
        <Button to="/registration?type=summer">Registration</Button>
      </div>
      <div className="container mx-auto flex justify-center flex-col items-center md:flex-row space-y-2 md:space-y-0 md:space-x-2 pt-10">
        <img src={Summer1} alt="summer camp flyer" />
        <img src={Summer2} alt="summer camp flyer" />
      </div>
      <div className="container mx-auto">
        <Swiper
          spaceBetween={10}
          loop={true}
          autoplay={{ delay: 3000 }}
          centeredSlides={true}
          breakpoints={{
            // when window width is >= 300px
            300: {
              slidesPerView: 1.5,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
          }}
          className="mt-5 mb-10"
        >
          <SwiperSlide>
            <img src={Parent} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Staff} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Studio} />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex on justify-center flex-col items-center md:flex-row space-y-2 md:space-y-0 md:space-x-2 ">
        <Button to="/registration?type=summer">Registration</Button>
      </div>
    </Layout>
  )
}

export default SummerInfo
