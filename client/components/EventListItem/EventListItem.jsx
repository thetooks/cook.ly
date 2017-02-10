import React from 'react';
import styles from './EventListItem.css';

class EventListItem extends React.Component {

  constructor(props) {
    super(props);

    this.event = props.event;
  }

  render() {
    // console.log(this.event.img);
    return (
      <div className={styles.eventItemWrapper}>
        <div className={styles.eventItemDetailsWrapper}>
         
          
          <img src={this.event.cover} className={styles.cover}/>
          
            <div className={styles.priceRatingContainer}>

            </div>
            <div className={styles.eventTitle}>
              <strong>{this.event.title}</strong>
            </div>
            <div className={styles.eventDetails}>

              <span id={styles.detailPrice}>${this.event.price}</span>
              <span id={styles.detailType}>{this.event.type}</span>
              <span id={styles.detailReviewRating}>{this.event.reviews.rating}</span>
              <span id={styles.detailReviewCount}>{this.event.reviews.count}</span>
            </div>

          
        </div>
      </div>
    )
  }
};

module.exports = EventListItem;