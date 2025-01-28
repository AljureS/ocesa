import React from 'react'
import SocialPost from '../../../components/IG/SocialPost'
import socialLinks from '../../../data/social.json'
import './SocialMedia.css'
import { useSwipeable } from 'react-swipeable'

const SocialMedia = () => {
    const handlers = useSwipeable({
        onSwipedLeft: () => document.getElementById('social-container').scrollBy({ left: 300, behavior: 'smooth' }),
        onSwipedRight: () => document.getElementById('social-container').scrollBy({ left: -300, behavior: 'smooth' }),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    return (
        <section className="social-media">
            <div className='social-media-title'>
                <h3>Redes Sociales</h3>
            </div>

            <div className='social-container' id='social-container' {...handlers}>
                {
                    socialLinks.map((index) => {
                        return <SocialPost key={index.id} postURL={index.IgLink} width></SocialPost>
                    })
                }
            </div>
        </section>
    )
}

export default SocialMedia