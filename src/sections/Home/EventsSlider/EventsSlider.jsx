import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css'
import events from '../../../data/eventsSection.json'
import './EventsSlider.css'
const EventsSlider = () => {
    return (
        <>
            <section className='events-slider-section'>
                <ScrollAnimation  animateIn="animate__zoomInRight" animateOnce={true}>
                    <div>
                        <h3>EVENTOS</h3>
                    </div>
                </ScrollAnimation>

                <div className='wrapper1'>
                    <div className='card event-1'>
                        <img src={`${events[0].artistiImage}`} alt="" />
                    </div>
                    <div className='card event-2'>
                        <img src={`${events[0].artistiImage}`} alt="" />

                    </div>
                    <div className='card event-3'>
                        <img src={`${events[0].artistiImage}`} alt="" />

                    </div>
                    <div className='card event-4'>
                        <img src={`${events[0].artistiImage}`} alt="" />

                    </div>
                    <div className='card event-5'>
                        <img src={`${events[0].artistiImage}`} alt="" />

                    </div>
                </div>
                <div className='wrapper2'>
                    <div className='card event-6'>Event 6</div>
                    <div className='card event-7'>Event 7</div>
                    <div className='card event-8'>Event 8</div>
                    <div className='card event-9'>Event 9</div>
                    <div className='card event-10'>Event 10</div>
                </div>
            </section>
        </>
    )
}

export default EventsSlider
