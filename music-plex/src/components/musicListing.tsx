import MusicCard from "./musicCard"
import { useEffect, useState } from "react";
import style from "../styles/musicListing.module.css"
import { fetchSongs } from "@/services/musicService";


export default function MusicListing() {
    const [songs, setSongs] = useState<any>();
    const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query

    useEffect(() => {
      console.log(songs); // This log might not show the updated state immediately due to the asynchronous nature of fetch
    }, [songs]);
    useEffect(() => {
         fetchSongs("shape of you").then(response => {
            setSongs(response);
        });
    }, []);


    useEffect(() => {
      fetchSongs(searchQuery).then((response) => {
        setSongs(response);
      });
    }, [searchQuery]);
  
    const handleFormSubmit = (event:any) => {
      event.preventDefault();
      // Fetch songs based on the search query
      fetchSongs(searchQuery).then((response) => {
        setSongs(response);
      });
    };
    
    return (
      <>
               <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter song name"
        />
        <button type="submit">Search</button>
      </form>
        <div className={style['grid-container']}>
            {songs && songs.map((data:any)=>(
                <><MusicCard artist = {data.result.artist_names}
                             songTitle = {data.result.full_title}
                             imageUrl = {data.result.header_image_url}
                /></>
            ))} 
         
        </div>
        </>
    );
}
