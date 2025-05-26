import React from 'react'
import SocialPost from '../../../components/IG/SocialPost'
import socialLinks from '../../../data/social.json'
import './SocialMedia.css'
import { useSwipeable } from 'react-swipeable'
import ScrollAnimation from 'react-animate-on-scroll'

const SocialMedia = () => { 
    const handlers = useSwipeable({
        onSwipedLeft: () => document.getElementById('social-container').scrollBy({ left: 300, behavior: 'smooth' }),
        onSwipedRight: () => document.getElementById('social-container').scrollBy({ left: -300, behavior: 'smooth' }),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    return (
        <section className="social-media"> 
            <ScrollAnimation  animateIn="animate__fadeInRightBig"  delay={0} animateOnce={true}>
                <div className='social-media-title'>
                    <h3>Redes Sociales</h3>
                </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__fadeInUp" animateOut='animate__fadeOut' animateOnce={false}>
                <div className='social-container' id='social-container' {...handlers}>
                    {
                        socialLinks.map((index) => {
                            return <SocialPost key={index.id} postURL={index.IgLink} width></SocialPost>
                        })
                    }
                </div>
            </ScrollAnimation>
        </section>
    )
}

export default SocialMedia