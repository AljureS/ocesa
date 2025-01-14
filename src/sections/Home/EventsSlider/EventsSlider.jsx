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
                    <div className='event-title'>
                        <h3>EVENTOS</h3>
                    </div>
                </ScrollAnimation>

                <div className='wrapper1'>
                    <div className='card-event event-1'>
                        <img src={`${eventsLong[0].artistiImage}`} alt={eventsLong[0].name} />
                        <div className="overlay-content">
                            <p>{eventsLong[0].name}</p>
                            <ButtonSpecial />
                        </div>
                    </div>
                    <div className='card-event event-2'>
                        <img src={`${eventsLong[0].artistiImage}`} alt="" />

                    </div>
                    <div className='card-event event-3'>
                        <img src={`${eventsLong[0].artistiImage}`} alt="" />

                    </div>
                    <div className='card-event event-4'>
                        <img src={`${eventsLong[0].artistiImage}`} alt="" />

                    </div>
                    <div className='card-event event-5'>
                        <img src={`${eventsLong[0].artistiImage}`} alt="" />

                    </div>
                </div>
                <div className='wrapper2'>
                    <div className='card-event event-6'>Event 6</div>
                    <div className='card-event event-7'>Event 7</div>
                    <div className='card-event event-8'>Event 8</div>
                    <div className='card-event event-9'>Event 9</div>
                    <div className='card-event event-10'>Event 10</div>
                </div>
            </section>
        </>
    )
}

export default EventsSlider
