import React from 'react'
// import events from '../../../data/dataEvents.json'
import './EventsSlider.css'
const EventsSlider = () => {
    return (
        <>
            <section className='events-slider-section'>
                <div>
                    <h3>EVENTOS</h3>
                </div>
                <div className='wrapper1'>
                    <div className='card event-1'>Event 1</div>
                    <div className='card event-2'>Event 2</div>
                    <div className='card event-3'>Event 3</div>
                    <div className='card event-4'>Event 4</div>
                    <div className='card event-5'>Event 5</div>
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
