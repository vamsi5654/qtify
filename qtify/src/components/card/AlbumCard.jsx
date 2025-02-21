import React from "react";
//import styles from "./AlbumCard.module.css";
//import { Chip } from "@mui/material";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

function AlbumCard({ song }) {
  return (
       <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "180px" }}>
         {/* Card Container */}
         <Card
           sx={{
             backgroundColor: "white",
             borderRadius: "12px",
             boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
             color: "white",
             width: "100%",
             textAlign: "left",
             position: "relative",
           }}
         >
           {/* Song Image */}
           <CardMedia
             component="img"
             height="160"
             image={song.image}
             alt={song.title}
             sx={{ borderRadius: "12px 12px 0 0" }}
           />
   
           {/* Likes Box (Left Aligned) */}
           <CardContent sx={{ display: "flex", justifyContent: "flex-start", padding: "8px" }}>
             <Box
               sx={{
                 backgroundColor: "black",
                 color: "white",
                 padding: "5px 8px",
                 borderRadius: "8px",
                 fontSize: "12px",
                 fontWeight: "bold",
               }}
             >
               {song.follows} Follows
             </Box>
           </CardContent>
         </Card>
   
         {/* Song Title Outside the Card */}
         <Typography
           variant="body1"
           sx={{
             marginTop: "8px",
             fontSize: "14px",
             fontWeight: "bold",
             color: "white",
             textAlign: "center",
           }}
         >
           {song.title}
         </Typography>
       </Box>
  );
}

export default AlbumCard;
