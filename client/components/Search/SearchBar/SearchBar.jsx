import React from 'react';
import styles from './SearchBar.css';
import GuestDropdown from './GuestDropdown/GuestDropdown.jsx';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.searchBarWrapper + ' ' + 'container'}>
        <div className='flexWrapper'>
          <div className={'flexItem ' + styles.flexItem}>
            <div className={styles.searchBarOptionWrapper}>
              <div className={styles.searchBarWhereOption}>
                <label>Where</label>
                <div>
                  <input 
                    type="text" 
                    placeholder="Destination, city, address"></input>
                </div>
              </div>  
            </div>    
          </div>

          <div className='flexItem'>
            <div className={styles.searchBarOptionWrapper}>
                <div className={styles.searchBarWhenOption}>
                <label>When</label>
                <div>
                  <input 
                    type="text" 
                    placeholder="When do you want to eat?"></input>
                </div>
              </div>  
            </div>  
          </div>  

          <div className='flexItem'>
            <div className={styles.searchBarOptionWrapper + ' ' +
                            styles.searchBarOptionWrapperLast}  >
              <div className={styles.searchBarHowManyOption}>
                <label>Guests</label>
                <div>
                  <button onClick="">Guests</button>
                  <GuestDropdown />
                </div>    
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBar;