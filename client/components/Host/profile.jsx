import React from 'react';
import {Thumbnail} from 'react-bootstrap';
class Profile extends React.Component {
  render() {
    const { profile } = this.props;

    return (
      <Thumbnail src={profile.picture} alt="121x100">
        <p><strong>Name: </strong> {profile.name}</p>
        <p><strong>Email: </strong> {profile.email}</p>
        <p><strong>Nickname: </strong> {profile.nickname}</p>
        <p><strong>Created At: </strong> {profile.created_at}</p>
        <p><strong>Updated At: </strong> {profile.updated_at}</p>
        <p>Rating: 5 Stars</p>
      </Thumbnail>
    );  
  }
}
    
   


module.exports = Profile;