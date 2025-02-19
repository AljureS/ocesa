import React from 'react'
import PropTypes from 'prop-types'
import styles from './CardEvent.module.css'
import Button2 from '../Button2/Button2'

const CardEvent = ({evento}) => {

    const {name, artistiImage, url, descripcion, btnText, availability} = evento

    const botonInfo = {
        url: url,
        btnText: btnText,
        availability: availability
    }

    return (
        <div className={styles.cardCatalogo}>
            <h2 className={styles.mobileTitle}>{name}</h2>
            
            <div>
                <img src={artistiImage} alt={name + " image"} className={styles.cardImage} />
            </div>

            <div className={styles.cardContent}>
                <div className={styles.cardInfo}>
                    <h2>{name}</h2>
                    <p className={styles.cardDescription}>{descripcion}</p>
                </div>
                <div>
                    <Button2 className={styles.cardButton} botonInfo={botonInfo}></Button2>

                </div>
            </div>
        </div>
    )
}
CardEvent.propTypes = {
    evento: PropTypes.shape({
        name: PropTypes.string.isRequired,
        artistiImage: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        date: PropTypes.string,
        descripcion: PropTypes.string.isRequired,
        btnText: PropTypes.string,
        availability: PropTypes.bool
    }).isRequired
}

export default CardEvent
