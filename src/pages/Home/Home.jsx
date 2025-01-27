import React /*, { useEffect }*/ from 'react'
import MainSlider from '../../sections/Home/MainSlider/MainSlider'
import SocialMedia from '../../sections/Home/Social/SocialMedia'
import OcesaPlaylist from '../../sections/Home/Spotify/OcesaPlaylist'
import './Home.css'
import EventsSlider from '../../sections/Home/EventsSlider/EventsSlider'

const Home = () => {
    
    return (
        <>
                    <MainSlider></MainSlider>
                    <EventsSlider></EventsSlider>
                    <OcesaPlaylist></OcesaPlaylist>
                    <SocialMedia></SocialMedia>
            
        </>
    )
}

export default Home
