var Sequelize = require('sequelize')
var connection = new Sequelize('cookly', 'root', '');

var User = connection.define ('Users', {
  'FirstName': Sequelize.STRING,
  'LastName': Sequelize.STRING,
  'Address': Sequelize.STRING
});

var Location = connection.define('Locations', {
  'City': Sequelize.STRING,
  'State': Sequelize.STRING
});


var Preference = connection.define('Preferences', {
  'preference': Sequelize.STRING,
});

var Host = connection.define('Hosts', {
  'FirstName': Sequelize.STRING,
  'LastName': Sequelize.STRING,
  'Address': Sequelize.STRING
});

var Review = connection.define('Reviews', {
  'Review': Sequelize.STRING,
  'Rating': Sequelize.STRING,
});

var Menu = connection.define('Menus', {
  'DinnerItem': Sequelize.STRING,
  'LunchItem': Sequelize.STRING,
  'BreakfastItem': Sequelize.STRING,
  'Drink Item': Sequelize.STRING
});

var Event = connection.define('Events', {
  'TimeStamp': Sequelize.DATE,
  'Cuisine': Sequelize.STRING,
  'MaxSeats': Sequelize.INTEGER,
  'Address': Sequelize.STRING,
});

var UserBooking = connection.define ('UserBookings', {
  'Price': Sequelize.STRING,
  'TimeofPurchase': Sequelize.DATE
});

var Specialty = connection.define('Specialties', {
  'Speciality': Sequelize.STRING
});


User.belongsToMany(Host, {through: 'Users_Hosts'});
Host.belongsToMany(User, {through: 'Users_Hosts'});
User.belongsToMany(Event, {through: 'Users_Events'});
Event.belongsToMany(User, {through: 'Users_Events'});
Host.belongsToMany(Specialty, {through: 'Hosts_Specialties'});
Specialty.belongsToMany(Host, {through: 'Hosts_Specialties'});

User.hasMany(Review, {as: 'Reviews'})
Location.hasMany(User, {as: 'Locations'});
Location.hasMany(Host, {as: 'Locations'});
Location.hasMany(Event, {as: 'Locations'});
Preference.hasMany(User, {as: 'Preferences'});
// User.hasMany(Review, {as: 'Users'});
Host.hasMany(Review, {as: 'Reviews'});
Event.hasMany(UserBooking, {as: 'Events'});

Event.belongsTo(Host, {as: 'Host'});
//** Not sure if these are needed
// Menu.belongsTo(Event); ** Not sure if these are needed
// Location.belongsTo(Event);

module.exports.User = User;
module.exports.Location = Location;
module.exports.Preference = Preference;
module.exports.Host = Host;
module.exports.Review = Review;
module.exports.Menu = Menu;
module.exports.Event = Event;
module.exports.UserBooking = UserBooking;
module.exports.Specialty = Specialty;

connection.sync().then(function() {
  for (let i = 1; i < 5; i++) {
    // fill the database with test data
    // currently 
    User.build({
      FirstName: 'Guest',
      LastName: '' + i,
      Address: i + 'Random Street, San Fran',
    }).save();

    Host.build({
      FirstName: 'Host',
      LastName: '' + i,
      Address: i + 'Random Street, Not San Fran',
    }).save();

    Event.build({
      TimeStamp: '2017-01-01',
      Cuisine: 'Rainbow Cake',
      MaxsSeats: 20,
      Address: i + 'Cake Street, Rainbow Unicorn Island',
      HostId: i
    }).save();

  }
});

 
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