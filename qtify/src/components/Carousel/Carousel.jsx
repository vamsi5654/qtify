import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";
import AlbumCard from "../card/AlbumCard";
import NavigationButtons from "../NavigationButton/NavigationButtons"; // Import buttons

function Carousel({ items, renderItem }) {
  return (
    <div className={`${styles.carousel} custom-swiper`}> {/* Add custom class */}
      {/* Songs Carousel */}
      <Swiper
  spaceBetween={20}
  slidesPerView={"auto"}
  navigation={true}
  modules={[Navigation]}
  className="custom-swiper"
  style={{ position: "relative" }} // Ensures positioning works
>
  {items.map((song) => (
    <SwiperSlide key={items.id} style={{ width: "180px" }}>
      <AlbumCard song={song} />
    </SwiperSlide>
  ))}
</Swiper>

      {/* Add the navigation buttons */}
      <NavigationButtons />
    </div>
  );
}

export default Carousel;
