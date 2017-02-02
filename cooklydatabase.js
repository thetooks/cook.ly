var Sequelize = require('sequelize');
var connection = new Sequelize('cookly', 'root', '');

var User = connection.define ('Users', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING
});

var Host = connection.define ('Host', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING
});

var Location = connection.define('Locations', {
  state: Sequelize.STRING,
  city: Sequelize.STRING,
  address: Sequelize.STRING
});

var Review = connection.define('Reviews', {
  comment: Sequelize.STRING,
  rating: Sequelize.INTEGER,
  reviewType: Sequelize.STRING
});

var Event = connection.define('Events', {
  startTime: Sequelize.DATE,
  endTime: Sequelize.DATE,
  cuisine: Sequelize.STRING,
  maxSeats: Sequelize.INTEGER,
  price: Sequelize.STRING
});

var UserBooking = connection.define ('UserBookings', {
});

// var UserPreference = connection.define('Users', {
//   'preference': Sequelize.STRING,
// });


// var Menu = connection.define('Menus', {
//   'DinnerItem': Sequelize.STRING,
//   'LunchItem': Sequelize.STRING,
//   'BreakfastItem': Sequelize.STRING,
//   'Drink Item': Sequelize.STRING
// });

// var Specialty = connection.define('Specialties', {
//   'Speciality': Sequelize.STRING
// });


// User.belongsToMany(Host, {through: 'Users_Hosts'});
// Host.belongsToMany(User, {through: 'Users_Hosts'});
// Host.belongsToMany(Specialty, {through: 'Hosts_Specialties'});
// Specialty.belongsToMany(Host, {through: 'Hosts_Specialties'});


// User.hasMany(Review, {as: 'Reviews'});
// Location.hasMany(User, {as: 'Locations'});
// Location.hasMany(Host, {as: 'Locations'});
// Location.hasMany(Event, {as: 'Locations'});
// UserPreference.hasMany(User, {as: 'Preferences'});
// User.hasMany(Review, {as: 'Users'});
// Host.hasMany(Review, {as: 'Reviews'});
// Event.hasMany(UserBooking, {as: 'Events'});
// Event.belongsTo(Host);

User.belongsTo(Location);
Host.belongsTo(Location);

User.hasMany(Review);
Host.hasMany(Review);

Host.hasOne(Event);
// Event.belongsToMany(User, {
//   foreignKey: 'DinerId', through: 'UserBookings'
// });
// User.belongsToMany(Event, {through: 'UserBookings'});




module.exports = {
  User: User,
  Host: Host,
  Location: Location,
  Review: Review,
  Event: Event
};

 
// //  /*
// users has many hosts
// hosts has users

// users has many events
// hosts has many events
// events belongs to hosts
// menus has one event

// hosts has many specialties
// specialties has many hosts

// hosts has many reviews
// reviews belongs to hosts
// */ 
connection.sync();