import React from 'react'

import PropTypes from 'prop-types'
import './Button2.css'


const Button2 = ({ botonInfo }) => {
    const {url, btnText, availability} = botonInfo
    return (
        <button className="button" data-text="Awesome" disabled={!availability} onClick={() => window.open(url, "_blank")}>
            <span className="actual-text">&nbsp;{btnText}&nbsp;</span>
            {
                !availability ? true :  <span aria-hidden="true" className="hover-text">&nbsp;{btnText}&nbsp;</span>
            }
        </button>
    )
}

Button2.propTypes = {
    botonInfo: PropTypes.shape({
        url: PropTypes.string.isRequired,
        btnText: PropTypes.string,
        availability: PropTypes.bool.isRequired
    }).isRequired
}

export default Button2