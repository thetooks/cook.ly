import React, { Component } from 'react'
import Reviews from './detail-review.jsx'

class SummaryInfo extends Component {
  render () {
    return (
      <div className='detail-page-container'>
        <div className='detail-summary-about-container'>
          <div className='detail-summary-about-title'>About this listing</div>
          <div className='detail-summary-about'>
            <div>The house is located in a beautiful natural park, fully enclosed, supervised by a couple of 'caseiros' (caretaker and gardener)</div>
            <div>** House for a minimum of 6 adults from 01/12 to 30/02</div>
            <div>Children under 5 do not pay their stay. From five years old price is similar as adult price.</div>
            <div>NB: the price of 79US$ is per person and per night</div>
            <div>NB: sorry, dogs or animals are not admitted</div>
            <button className='detail-summary-contact-btn'>Contact host</button>
          </div>
        </div>
        <div className='detail-summary-info-container detail-list'>
          <div className='detail-summary-info-title'>The space</div>
          <div>
            <div>Accommodates: <span>8</span></div>
            <div>Bathrooms: <span>2.5</span></div>
            <div>Bedrooms: <span>4</span></div>
            <div>Beds: <span>6</span></div>
          </div>
          <div>
            <div>Check In: <span>Anytime after 3PM</span></div>
            <div>Check Out: <span>10AM</span></div>
            <div>Property type: <span>House</span></div>
            <div>Room type: <span>Entire home/apt</span></div>
          </div>
        </div>
        <div className='detail-summary-price-container detail-list'>
          <div className='detail-summary-price-title'>Prices</div>
          <div>
            <div>Extra people: <span>$81 / night after the first guest</span></div>
            <div>Cleaning Fee: <span>$31</span></div>
          </div>
          <div>
            <div>Security Deposit: <span>$1030</span></div>
            <div>Cancellation: <span>Strict</span></div>
          </div>
        </div>
        <Reviews />
        <div className='detail-neighborhood-container'>
          <iframe className='detail-neighorhood-map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.270826931993!2d-122.41115528459252!3d37.78369237975781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858085bdb9cd35%3A0xbdb5525f0a6d91a6!2sHack+Reactor!5e0!3m2!1sen!2sus!4v1486609349597' />
        </div>
      </div>
    )
  }
}

export default SummaryInfo
