import React from 'react';
import styles from './EventListItem.css';

class EventListItem extends React.Component {

  constructor(props) {
    super(props);

    this.event = props.event;
  }

  render() {
    return (
      <div className="flexItem">
        <h2>{this.title}</h2>
        {this.event.img}
        <div className={styles.eventListItem}>
          <span id={styles.detailPrice}>{this.event.price}</span>
          <span id={styles.detailType}>{this.event.type}</span>
          <span id={styles.detailReviewRating}>{this.event.reviews.rating}</span>
          <span id={styles.detailReviewCount}>{this.event.reviews.count}</span>
        </div>
      </div>
    )
  }
};

module.exports = EventListItem;