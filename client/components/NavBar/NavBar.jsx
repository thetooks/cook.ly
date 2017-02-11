import React from 'react';
import Link from 'react-router/lib/Link';
import styles from './NavBar.css';

class NavBar extends React.Component {
  

  render() {
    return (
      <nav className={styles.navWrapper}>
        <div className={styles.name}>
          <h1>
            <Link to="/" className={styles.logo}>Cook.ly</Link>
          </h1>
        </div>
        <div>
          <span className={styles.searchIcon}>
            <i className="fa fa-search" aria-hidden="true"></i>
          </span>
          <input type="text" className={styles.search} placeholder="Search"/>
            
          
        </div>
        <div className={styles.links}>
          <div className={styles.link}>
            <span>
              Become a Host
            </span>
          </div>
            
          <div className={styles.link}>
            <span>
              Reservations
            </span>
          </div>
        
          <div className={styles.link}>
            <span>
              Messages
            </span>
          </div>
    
          <div className={styles.link}>
            <span>
              Help
            </span>
          </div>
    
        </div>
      </nav>



    );
  }
}


module.exports = NavBar;