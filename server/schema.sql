-- DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

/*when a user submits a POST request:
id: auto incremented
users_id: use {name: 'Annie'} to lookup in users table
msg: from POST object
room_id:
*/
CREATE TABLE messages (
  /* Describe your table here.*/
  id INTEGER,
  users_id INTEGER,
  msg TEXT,
  room_id INTEGER,
  PRIMARY KEY id,
  FOREIGN KEY (room_id) REFERENCES rooms(id),
  FOREIGN KEY (users_id) REFERENCES users(id)
);

/* Create other tables and define schemas for them here! */

/*this is updated when a new user signs in for the first time
when they send their first message as a POST request, we'll INSERT INTO the "users" table
*/
CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  username TEXT
);


/* this is updated when someone selects "new room" from the room dropdown.
when they send their "new room" message as a POST request, we'll INSERT INTO the "rooms table"
*/
CREATE TABLE rooms (
  id INTEGER PRIMARY KEY,
  roomname TEXT

);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

