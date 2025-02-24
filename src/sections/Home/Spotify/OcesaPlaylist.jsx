import React from 'react'
import 'animate.css'
import ScrollAnimation from 'react-animate-on-scroll'
import './OcesaPlaylist.css'

const OcesaPlaylist = () => {
    
    return (
        <>
            <section className='ocesa-playlist-section'>
                <ScrollAnimation  animateIn="animate__fadeInLeftBig"  delay={0} animateOnce={true}>
                    <div className='ocesa-playlist-title'>
                        <h3>Escucha OCESA</h3> 
                    </div>
                </ScrollAnimation>   

                    <div className='ocesa-playlist-container'>
                        <ScrollAnimation animateIn="animate__fadeInUp" animateOut='animate__zoomOut' animateOnce={false}>
                            <div className='spotify-container'>
                                <iframe 
                                    className='ocesa-playlist'
                                    style={{ borderRadius: '12px', border: '0' }}
                                    src="https://open.spotify.com/embed/playlist/6Dhh1Lv1mk4M9MpwB0AclL?utm_source=generator"
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                    loading="lazy"
                                    title="Spotify Playlist"
                                />
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation  animateIn="animate__zoomIn" animateOut='animate__fadeOut' animateOnce={false}>
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