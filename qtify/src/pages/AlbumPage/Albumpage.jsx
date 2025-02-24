import React, { useState, useEffect } from "react";
import Card from "../Card/Card";

function AlbumPage() { 
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://qtify-backend-labs.crio.do/albums/top")
      .then((response) => response.json())
      .then((data) => {
        setAlbums(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching albums:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading albums...</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
      {albums.map((album) => (
        <Card 
          key={album.id}
          albumImage={album.image}
          albumName={album.title}
          follows={album.follows}
        />
      ))}
    </div>
  );
}

export default AlbumPage;
