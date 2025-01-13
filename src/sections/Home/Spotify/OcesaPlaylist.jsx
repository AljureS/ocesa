import React from 'react'
import 'animate.css'
import ScrollAnimation from 'react-animate-on-scroll'
import './OcesaPlaylist.css'

const OcesaPlaylist = () => {
    
    return (
        <>
        <section className='ocesa-playlist-section'>
            <ScrollAnimation  animateIn="animate__fadeInLeftBig" delay={0} animateOnce={true}>
                <h3>Escucha OCESA</h3> 
            </ScrollAnimation>

                <div className='ocesa-playlist-container'>
                    <ScrollAnimation animateIn="animate__fadeInUp" delay={200}  animateOnce={true}>
                        <div className='spotify-container'>
                            <iframe
                                className='ocesa-playlist'
                                style={{ borderRadius: '12px', border: '0' }}
                                src="https://open.spotify.com/embed/playlist/4pZ2RieXjMWURPCUfij6ew?utm_source=generator"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                                title="Spotify Playlist"
                            />
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation delay={100} animateIn="animate__zoomIn" animateOnce={true}>
                        <div className='pauta-spotify'>
                            <img className='pauta' src='/pauta/PAUTA-AQUI.webp' alt='Pauta' loading='lazy'/>
                        </div>
                    </ScrollAnimation>
                </div>


        </section>
        </>
    )
}

export default OcesaPlaylist