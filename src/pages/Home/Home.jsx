import React from 'react'
import MainSlider from '../../sections/Home/MainSlider/MainSlider'
import Artist from '../../sections/Home/Artist/Artist'
import SocialMedia from '../../sections/Home/Social/SocialMedia'
import OcesaPlaylist from '../../sections/Home/Spotify/OcesaPlaylist'
// import './Home.css'

const Home = () => {
    return (
        <>
            <MainSlider></MainSlider>
            <Artist></Artist>
            <SocialMedia></SocialMedia>
            <OcesaPlaylist></OcesaPlaylist>
        </>
    )
}

export default Home
