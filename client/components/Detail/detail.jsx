import React, { Component } from 'react'
import CoverImage from './cover-image.jsx'
import SummaryNav from './summary-nav.jsx'
import Summary from './summary.jsx'
import SummaryInfo from './summary-info.jsx'
import BookIt from './bookit.jsx'

class Detail extends Component {
  render () {
    return (
      <div className='detail-container'>
        <div className='detail-cover-image-container'>
          <CoverImage />
          <div className='detail-main-container'>
            <button className='detail-main-request-book-btn'>Request to Book</button>
            <div className='detail-right-container'>
              <BookIt />
            </div>
            <div className='detail-left-container'>
              <SummaryNav />
              <Summary />
              <SummaryInfo />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Detail
