DROP DATABASE IF EXISTS tunr_app;
CREATE DATABASE tunr_app;

\c tunr_app;

CREATE TABLE songs (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 artist TEXT NOT NULL,
 album TEXT,
 time TEXT,
 is_favorite BOOLEAN
);
