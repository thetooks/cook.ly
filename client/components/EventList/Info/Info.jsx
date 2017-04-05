import React from 'react';
import styles from './Info.css';
import _ from 'lodash';

class Info extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      'priceOptionSelected': true,
      'whenOptionSelected': true,
      'whereOptionSelected': true,
      'howManyOptionSelected': true,

    }   
  }

  render() {
    return (
  
      <div className={styles.infoWrapper}>
        <div className={styles.infoDetailsWrapper}>
          <div className="flexWrapper">
            <div className="flexItem">
              <div className={styles.info}>
                <strong>Enter dates to see full pricing. Additional fees apply. Taxes may be added.</strong>
              </div>
            </div>
            <div className="flexItem">
              <div className={styles.number}>
                <strong>300+ Dinners</strong>
              </div>  
            </div>
          </div>
        </div>
      </div>   
    );
  }
}

export default Info;
