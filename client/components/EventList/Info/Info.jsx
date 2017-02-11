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
        <div className="flexWrapper">
          <div className="flexItem">
          </div>
          <div className="flexItem">
            <span>300+ Dinners</span>
          </div>
        </div>
      </div>   
    );
  }
}

export default Info;
