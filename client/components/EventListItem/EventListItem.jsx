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
          <div className={styles.eventDetails}>


            <span className={styles.detailPrice}>
              <strong>${this.event.price}</strong>
            </span>
            
            <span className={styles.detailReviewRating}>
              <strong>{this.event.reviews.rating}</strong> Stars
            </span>

            <span className={styles.detailReviewCount}>
              <strong>{this.event.reviews.count}</strong> Ratings
            </span>

            <div className={styles.eventTitle}>
              <strong>{this.event.title}</strong>
            </div>

            <span className={styles.detailType}>
              {this.event.type} / House
            </span>
          </div>

          
        </div>
      </div>
    )
  }
};

module.exports = EventListItem;