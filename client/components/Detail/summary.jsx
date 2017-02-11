import React, { Component } from 'react'

class Summary extends Component {
  render () {
    return (
      <div className='detail-summary-summary'>
        <div className='detail-summary-profile-image'></div>
        <div className='detail-summary-profile-info'>
          <div className='detail-summary-title'>Exceptional property private beach</div>
          <div className='detail-summary-rating-container'>
            <div className='detail-summary-sub-title'>Governador Celso Ramos, Santa Catarina, Brazil</div>
            <div className='detail-review-summary-rating'>
              <i className='fa fa-star fa-1x' aria-hidden='true' /><i className='fa fa-star fa-1x' aria-hidden='true' /><i className='fa fa-star fa-1x' aria-hidden='true' /><i className='fa fa-star fa-1x' aria-hidden='true' /><i className='fa fa-star-o fa-1x' aria-hidden='true' />
              <span>30</span>
            </div>
          </div>
          <div className='detail-summary-icon-row'>
            <div className='detail-summary-icon'><i className='fa fa-home fa-2x' aria-hidden='true' /><div>Entire Home</div></div>
            <div className='detail-summary-icon'><i className='fa fa-users fa-2x' aria-hidden='true' /><div>8 Guests</div></div>
            <div className='detail-summary-icon'><i className='fa fa-home fa-2x' aria-hidden='true' /><div>4 bedrooms</div></div>
            <div className='detail-summary-icon'><i className='fa fa-bed fa-2x' aria-hidden='true' /><div>6 beds</div></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Summary
