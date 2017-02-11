import React from 'react';
import styles from './Filter.css';
import _ from 'lodash';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.filterOptions = ['guests', 'type', 'allergies', 'price', 'more filters'];
      
  }

  render() {
    return (
  
      <div className={styles.filterWrapper}>
        
        { 
          _.map(this.filterOptions, (option) => {
            return (
              
              <div className={styles.filterOptionWrapper} key={option}>
                <div className={styles.filterOption}>
                  <span className={styles.filterOptionDetails}>{option}</span>
                  <i className="fa fa-chevron-down" aria-hidden="true"></i>
                </div>
              </div>
            
            )
          })
        }
        
      </div>   
    );
  }
}

export default Filter;
