import React, { useState, useEffect } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SongCard from "./SongCard";
import axios from "axios";

const SongsSection = () => {
  const [songs, setSongs] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");

  const genres = ["All", "Rock", "Pop", "Jazz", "Blues"];

  // Fetch Songs when Genre Changes
  useEffect(() => {
    const apiUrl =
      selectedGenre === "All"
        ? "https://qtify-backend-labs.crio.do/songs"
        : `https://qtify-backend-labs.crio.do/songs?genre=${selectedGenre}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setSongs(response.data);
      })
      .catch((error) => console.error("Error fetching songs:", error));
  }, [selectedGenre]);

  return (
    <Box sx={{ width: "100%"}}>
      <h2 className="section-title">Songs</h2>

      {/* Genre Tabs */}
      <Tabs
        value={selectedGenre}
        onChange={(e, newValue) => setSelectedGenre(newValue)}
        textColor="inherit"
        indicatorColor="primary"
        sx={{
          "& .MuiTabs-indicator": { backgroundColor: "limegreen" },
          "& .MuiTab-root": { color: "white", fontSize: "18px" },
          marginBottom: "20px",
        }}
      >
        {genres.map((genre) => (
          <Tab key={genre} label={genre} value={genre} />
        ))}
      </Tabs>

      {/* Songs Carousel */}
      <Swiper
  spaceBetween={20}
  slidesPerView={"auto"}
  navigation={true}
  modules={[Navigation]}
  className="custom-swiper"
  style={{ position: "relative" }} // Ensures positioning works
>
  {songs.map((song) => (
    <SwiperSlide key={song.id} style={{ width: "180px" }}>
      <SongCard song={song} />
    </SwiperSlide>
  ))}
</Swiper>

<style>
  {`
            /* Custom Swiper Navigation */
        .custom-swiper .swiper-button-next,
        .custom-swiper .swiper-button-prev {
        color: white;
        background: limegreen;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        position: absolute;
        top: 45%; /* Center the buttons vertically */
        transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
        opacity: 0; /* Hide by default */
        visibility: hidden; /* Ensure they are not clickable when hidden */
        }
        /* Show buttons when Swiper is hovered */
        .custom-swiper:hover .swiper-button-next,
        .custom-swiper:hover .swiper-button-prev {
        opacity: 1;
        visibility: visible;
        }

        /* Hide buttons when they are not required */
        .custom-swiper .swiper-button-disabled {
        opacity: 0 !important;
        visibility: hidden !important;
        pointer-events: none; /* Prevent clicking */
        }

        /* Adjust position to keep buttons inside */
        .custom-swiper .swiper-button-prev {
        left: 0px; /* Move button closer inside */
        }

        .custom-swiper .swiper-button-next {
        right: 0px; /* Move button closer inside */
        }

        /* Make arrow icons inside the buttons bigger */
        .custom-swiper .swiper-button-next::after,
        .custom-swiper .swiper-button-prev::after {
        font-size: 20px;
        font-weight: bold;
        }

  `}
</style>


    </Box>
  );
};

export default SongsSection;
