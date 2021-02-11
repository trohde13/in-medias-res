
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- media type table, holds the media that the app will log (Book, Movie, Television, & Podcast)
CREATE TABLE "media_type" (
	"id" SERIAL PRIMARY KEY,
	"type" VARCHAR (20)
);

-- media table, holds all the information the user is logging across media. connects to user info via "user_id", connects to media types via "media_type_id" 
CREATE TABLE "media" (
	"id" SERIAL PRIMARY KEY,
	"media_type_id" INT REFERENCES "media_type",
	"title_book" VARCHAR (255),
	"author" VARCHAR (255),
	"thoughts_book" VARCHAR (1000),
    "status_book" VARCHAR (255),
    "title_movie" VARCHAR (255),
	"year" VARCHAR (20),
	"thoughts_movie" VARCHAR (1000),
    "status_movie" VARCHAR (255),
    "title_television" VARCHAR (255),
	"season_television" VARCHAR (2),
	"episode_television" VARCHAR (4),
	"thoughts_television" VARCHAR (1000),
    "status_television" VARCHAR (255),
    "title_podcast" VARCHAR (255),
	"season_podcast" VARCHAR (2),
	"episode_podcast" VARCHAR (4),
	"thoughts_podcast" VARCHAR (1000),
    "status_podcast" VARCHAR (255),
	"date" DATE,
	"user_id" INT REFERENCES "user"
);

-- media type table insert
INSERT INTO "media_type" ("type")
VALUES ('Book'), ('Movie'), ('Television'), ('Podcast');


-- media table insert BOOKS dummy data
INSERT INTO "media" ("media_type_id", "title_book", "author", "thoughts_book", "status_book")
VALUES (1, 'title', 'author', 'thoughts', 'finished')




-- media table insert MOVIES dummy data
INSERT INTO "media" ("media_type_id", "title_movie", "year", "thoughts_movie", "status_movie")
VALUES (2, 'title', 'year', 'thoughts', 'finished')





-- media table insert TELEVISION dummy data
INSERT INTO "media" ("media_type_id", "title_television", "season_television", "episode_television", "thoughts_television", "status_television")
VALUES (3, 'title', 'season', 'episode', 'thoughts', 'finished')





-- media table insert PODCAST dummy data
INSERT INTO "media" ("media_type_id", "title_podcast", "season_podcast", "episode_podcast", "thoughts_podcast", "status_podcast")
VALUES (4, 'title', 'season', 'episode', 'thoughts', 'finished')


