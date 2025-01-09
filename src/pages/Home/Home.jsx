import React, { useEffect } from 'react'
import MainSlider from '../../sections/Home/MainSlider/MainSlider'
import Artist from '../../sections/Home/Artist/Artist'
import SocialMedia from '../../sections/Home/Social/SocialMedia'
import OcesaPlaylist from '../../sections/Home/Spotify/OcesaPlaylist'
import './Home.css'
// import Rellax from 'rellax'

const Home = () => {
    // useEffect(()=>{
    //     const rellax = new Rellax('.rellax',{
    //         speed: -2, 
    //         center: false, 
    //         wrapper: null, 
    //         vertical: true, 
    //         horizontal: false
    //     })
    // })
    return (
        <>
                    <MainSlider></MainSlider>
                    <Artist></Artist>
                    <SocialMedia></SocialMedia>
                    <OcesaPlaylist></OcesaPlaylist>
            {/* <div className='rellax-contanier'>
                <div className='rellax'>
                </div>
                <div id='artist-home-container' className='rellax'>
                </div>
                <div id='social-home-container' className='rellax'>
                </div>
                <div id='spotify' className='rellax'>
                </div>

            </div> */}
        </>
    )
}

export default Home
