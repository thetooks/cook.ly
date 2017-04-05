import React, { Component } from 'react'

class BookIt extends Component {
  render () {
    return (
      <div>
        <div className='detail-bookit-price-label'>
          <div className='detail-bookit-price-row clearfix'>
            <div className='detail-bookit-price'>$81</div>
            <div className='detail-bookit-price-limit'>Per Night</div>
          </div>
        </div>
        <div className='detail-bookit-form-container'>
          <form className='detail-bookit-form'>
            <div className='detail-bookit-form-field-group'>
              <div className='detail-bookit-form-field'>
                <label className='detail-bookit-form-label'>Check In</label>
                <input className='detail-bookit-form-input' type='text' placeholder='mm/dd/yyyy'></input>
              </div>
              <div className='detail-bookit-form-field'>
                <label className='detail-bookit-form-label'>Check Out</label>
                <input className='detail-bookit-form-input' type='text' placeholder='mm/dd/yyyy'></input>
              </div>
            </div>
            <div className='detail-bookit-form-field-group'>
              <div className='detail-bookit-form-field-guests'>
                <label className='detail-bookit-form-label'>Guests</label>
                <input className='detail-bookit-form-input' type='text' placeholder='Number of guests'></input>
              </div>
            </div>
            <button className='detail-request-bookit-btn'>Request to Book</button>
            <div className='detail-request-bookit-no-charge'>You won't be charged yet</div>
          </form>
        </div>
      </div>
    )
  }
}

export default BookIt
