import React, { Component } from 'react'

class SummaryNav extends Component {
  render () {
    return (
      <div className='detail-summary-nav'>
        <button className='detail-summary-btn'>Overview</button>
        <button className='detail-summary-btn'>Reviews</button>
        <button className='detail-summary-btn'>The Host</button>
        <button className='detail-summary-btn'>Location</button>
      </div>
    )
  }
}

export default SummaryNav
