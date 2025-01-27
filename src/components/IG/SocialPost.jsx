import React from 'react'
import {InstagramEmbed} from 'react-social-media-embed';
import './SocialPost.css'
import PropTypes from 'prop-types';

const SocialPost = ({postURL}) => { 
    return (
        <div className="card">
            <div className="tools">
                <div className="circle">
                    <span className="red box"></span>
                </div>
                <div className="circle">
                    <span className="yellow box"></span>
                </div>
                <div className="circle">
                    <span className="green box"></span>
                </div>
            </div>
            <div className="card__content">
                    <InstagramEmbed url={postURL}  />
            </div>
        </div>
    )
}

SocialPost.propTypes = {
    postURL: PropTypes.string.isRequired
}

export default SocialPost
