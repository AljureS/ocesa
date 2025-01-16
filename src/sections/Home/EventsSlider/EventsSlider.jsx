import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css'
import eventsLong from '../../../data/eventsSection.json'
import './EventsSlider.css'
import ButtonSpecial from '../../../components/Button'
const EventsSlider = () => {
    
    return (
        <>
            <section className='events-slider-section'>
                <ScrollAnimation  animateIn="animate__zoomInRight" animateOnce={true}>
                    <div className='event-slider-section-title'>
                        <h3>EVENTOS</h3>
                    </div>
                </ScrollAnimation>
                <div className='wrapper1'>
                    {eventsLong.slice(0, eventsLong.length - 5).map((event, i) => (
                            <div key={i} className={`card-event event-${i + 1}`}>
                                <img src={`${event.artistiImage}`} alt={event.name} loading='lazy' />
                                <div className="overlay-content">
                                    <p className='event-name'>{event.name}</p>
                                    <div>
                                        <ButtonSpecial url={event.url} />

                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className='wrapper2'>
                    {eventsLong.slice(eventsLong.length - 5, eventsLong.length).map((event, i) => (
                                <div key={i} className={`card-event event-${i + 1}` }>
                                    <img src={`${event.artistiImage}`} alt={event.name} loading='lazy'/>
                                    <div className="overlay-content">
                                        <p className='event-name'>{event.name}</p>
                                        <ButtonSpecial />
                                    </div>
                                </div>
                            ))
                        }
                </div>
            </section>
        </>
    )
}

export default EventsSlider
