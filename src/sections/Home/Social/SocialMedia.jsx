import React from 'react'
import SocialPost from '../../../components/IG/SocialPost'
import socialLinks from '../../../data/social.json'
import './SocialMedia.css'

const SocialMedia = () => {

    return (
        <section className="social-media">
            <div>
                <h3>Redes Sociales</h3>
            </div>

            <div className='social-container'>
                {
                    socialLinks.map((index)=>{
                        return <SocialPost key={index.id}  postURL={index.IgLink} width></SocialPost>
                    })
                }

            </div>
            
        </section>
    )
}

export default SocialMedia