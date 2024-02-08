CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(30) NOT NULL
);
CREATE TABLE wishlists (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) on DELETE CASCADE,
  title VARCHAR(60) NOT NULL
);
CREATE TABLE wishes (
  id SERIAL PRIMARY KEY,
  wishlist_id INTEGER REFERENCES wishlists(id) on DELETE CASCADE,
  name VARCHAR(60) NOT NULL,
  description TEXT,
  links TEXT[],
  photos TEXT[]
);
