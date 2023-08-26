import SideBar from "./sideBar";
import MusicListing from "./musicListing";
import style from "../styles/dashboard.module.css"

export default function Dashboard(){
return (
    <>
    <SideBar/>
    <h1>Music Plex</h1>
    <MusicListing />
    </>
)
}