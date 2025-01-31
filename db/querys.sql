  CREATE TABLE session (
  id VARCHAR(300) UNSIGNED NOT NULL AUTO_INCREMENT,
  estado BOOLEAN,
  );

CREATE TABLE active_session(
   id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  session_id VARCHAR(300) UNSIGNED NOT NULL,
  user_id VARCHAR(300) UNSIGNED NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(session_id) REFERENCES session(id),
  FOREIGN KEY(user_id) REFERENCES users(id)
  );