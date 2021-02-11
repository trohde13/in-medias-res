
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
INSERT INTO "media" ("media_type_id", "date", "title_book", "author", "thoughts_book", "status_book")
VALUES (1, '2020-01-05', 'Your Favorite Band Cannot Save You', 'Scott Moore', 'thoughts', 'finished'), (1, '2020-01-06', 'By Night', 'author', 'thoughts', 'finished'),
(1, '2020-01-08', 'Unbeatable Squirrel Girl, v6: Who Run the World? Squirrels!', 'Ryan North', 'thoughts', 'finished'), (1, '2020-01-11', 'Giant Days, v9', 'John Allison', 'thoughts', 'finished'),
(1, '2020-01-23', 'Dare Me''Megan Abbott', 'thoughts', 'finished'), (1, '2020-01-26', 'Mapping the Interior', 'Stephen Graham Jones', 'thoughts', 'finished'), 
(1, '2020-02-03', 'A Song For a New Day', 'Sarah Pinsker', 'thoughts', 'finished'), (1, '2020-02-09', 'The Twisted Ones', 'T. Kingfisher', 'thoughts', 'finished'),
(1, '2020-02-15', 'Broken Angels', 'Richard K. Morgan', 'thoughts', 'finished'), (1, '2020-02-24', 'Agency', 'William Gibson', 'thoughts', 'finished'), 
(1, '2020-03-01', 'Watchers', 'Dean Koontz', 'thoughts', 'finished'), (1, '2020-03-16', 'Come Tumbling Down', 'Seanan McGuire', 'thoughts', 'finished'), 
(1, '2020-03-21', 'Meddling Kids', 'Edgar Cantero', 'thoughts', 'finished'), (1, '2020-03-25', 'Giant Days v12', 'John Allison', 'thoughts', 'finished'),
(1, '2020-03-31', 'Night Shift', 'Stephen King', 'thoughts', 'finished'), (1, '2020-04-01', 'Killing Gravity', 'Corey J. White', 'thoughts', 'finished'), 
(1, '2020-04-05', 'The Manitou', 'Graham Masterton', 'thoughts', 'finished'), (1, '2020-04-18', 'Revival', 'Stephen King', 'thoughts', 'finished'), 
(1, '2020-04-20', 'Horrorstör', 'Grady Hendrix', 'thoughts', 'finished'), (1, '2020-04-29', 'In The Woods', 'Tana French', 'thoughts', 'finished'), 
(1, '2020-04-30', 'The Godwulf Manuscript', 'Robert B. Parker', 'thoughts', 'finished'), (1, '2020-05-04', 'Hearted Shaped Box', 'Joe Hill', 'thoughts', 'finished'), 
(1, '2020-05-11', 'Ninth House', 'Leigh Bardugo', 'thoughts', 'finished'), (1, '2020-05-13', 'Blade Runner 2019: Los Angeles', 'Michael Green', 'thoughts', 'finished'), 
(1, '2020-05-17', 'The Last Emperox', 'John Scalzi', 'thoughts', 'finished'), (1, '2020-05-26', 'Network Effect', 'Martha Wells', 'thoughts', 'finished'), 
(1, '2020-05-29', 'Relic', 'Douglas Preston & Lincoln Child', 'thoughts', 'finished'), (1, '2020-06-05', 'The Ancestor', 'Danielle Trussoni', 'thoughts', 'finished'), 
(1, '2020-06-06', 'Heavy Vinyl v2: Y2K-O', 'Carly Usdin', 'thoughts', 'finished'), (1, '2020-06-08', 'Wilder Girls', 'Rory Power', 'thoughts', 'finished'), 
(1, '2020-06-11', 'You Let Me In', 'Camilla Bruce', 'thoughts', 'finished'), (1, '2020-06-16', 'Evidence of V', "Shelia O'Connor", 'Heartbreaking and poetic', 'finished'),
(1, '2020-06-30', 'Duma Key', 'Stephen King', 'thoughts', 'finished'), (1, '2020-07-02', 'Who Goes There?', 'John W. Campbell', "The Thing is one of my favorite movies and it is interesting to see what was present in the original story and what wasn't", 'finished'),
(1, '2020-07-13', 'The Haunting of Hill House', 'Shirley Jackson', 'thoughts', 'finished'), (1, '2020-07-18', 'Universal Harvester', 'John Darnielle', 'thoughts', 'finished'), 
(1, '2020-07-22', 'The Whisper Man', 'Alex North', 'thoughts', 'finished'), (1, '2020-07-30', "The Southern Book Club's Guide to Slaying Vampires", 'Grady Hendrix', 'thoughts', 'finished'),
(1, '2020-08-08', 'The Shadows', 'Alex North', 'thoughts', 'finished'), (1, '2020-08-11', 'Burn Our Bodies Down', 'Rory Power', 'thoughts', 'finished'), 
(1, '2020-08-14', 'Unsub', 'Meg Gardiner', 'thoughts', 'finished'), (1, '2020-08-19', 'Sisters of the Vast Black', 'Lina Rather', 'Space nuns fighting patriarchy!', 'finished'), 
(1, '2020-08-27', 'Mexican Gothic', 'Silvia Moreno-Garcia', 'Thick with dread crawling toward cosmic horror', 'finished'), (1, '2020-08-29', 'Head On', 'John Scalzi', 'thoughts', 'finished'),
(1, '2020-08-30', 'River of Teeth', 'Sarah Gailey', 'thoughts', 'finished'), (1, '2020-09-05', 'Harrow the Ninth', 'Tamsyn Muir', 'Lesbian necromancers on a haunted space ship', 'finished'), 
(1, '2020-09-13', 'Open Season', 'C.J. Box', 'thoughts', 'finished'), (1, '2020-09-14', 'The Bullet Journal Method', 'Ryder Carroll', 'Organizational planning/ journal method. Lots to think about', 'finished'), 
(1, '2020-09-22', 'Survivor Song', 'Paul Tremblay', 'Haunting and poetic pandemic horror novel.', 'finished'), (1, '2020-09-24', 'Dr. Strange, v3: Blood in the Aether', 'Jason Aaron', 'thoughts', 'finished'), 
(1, '2020-09-25', 'Doctor Aphra, v3: Remastered', 'Kieron Gillen', 'thoughts', 'finished'), (1, '2020-09-26', 'The Haunting of Tram Car 015', 'P. Djèlí Clark', 'thoughts', 'finished'), 
(1, '2020-09-29', 'Blackbird, v1', 'Sam Humphries & Jen Bartell', 'thoughts', 'finished'), (1, '2020-10-01', 'Captain America, v1: Winter in America', 'Ta-Nehisi Coates', 'thoughts', 'finished'), 
(1, '2020-10-04', 'The Return', 'Rachel Harrison', 'Unsettling & suspenseful horror novel about longterm female friends, toxic friendships, & monsters', 'finished'), (1, '2020-10-05', 'Captain America, v2: Captain of Nothing', 'Ta-Nehisi Coates', 'thoughts', 'finished'), 
(1, '2020-10-08', 'Jughead, v2', 'Chip Zdarsky', 'thoughts', 'finished'), (1, '2020-10-25', 'Home Before Dark', 'Riley Sager', 'thoughts', 'finished'), 
(1, '2020-10-29', 'November, v1: The Girl on the Roof', 'Matt Fraction', 'thoughts', 'finished'), (1, '2020-11-04', 'The Hollow Places', 'T. Kingfisher', 'thoughts', 'finished'), 
(1, '2020-11-09', 'Catherine House', 'Elizabeth Thomas', 'thoughts', 'finished'), (1, '2020-11-18', 'Night of the Mannequins', 'Stephen Graham Jones', 'thoughts', 'finished'),
(1, '2020-11-15', 'Black Panther, v4: Avengers of the New World, Part One', 'Ta-Nehisi Coates', 'thoughts', 'finished'), (1, '2020-11-16', 'Contingency Plans for the Apocalypse and Other Possible Situations', 'S.B. Divya', 'thoughts', 'finished');





-- media table insert MOVIES dummy data
INSERT INTO "media" ("media_type_id", "title_movie", "year", "thoughts_movie", "status_movie")
VALUES (2, '2020-01-03', '6 Underground', '2019', 'Pretty, but terribly incoherent', 'finished'), (2, '2020-01-04', 'Adam Devine: We Are Having the Best Time Ever', '2019', 'stand up', 'finished'),
(2, '2020-01-05', 'Secret Life of Pets 2', '2019', 'thoughts', 'finished'), (2, '2020-01-09', 'Ilana Glazer: The Planet is Burning', '2020', 'stand up', 'finished'),
(2, '2020-01-10', 'The Aeronauts', '2019', 'thoughts', 'finished'), (2, '2020-01-10', 'Joel McHale: Live from Pyongyang', '2019', 'stand up', 'finished'),
(2, '2020-01-10', 'Janeane Garofalo: If I may', '2016', 'stand up', 'finished'), (2, '2020-01-12', "Stephen King's Graveyard Shift", '1990', 'thoughts', 'finished'),
(2, '2020-01-13', 'The Report', '2019', 'thoughts', 'finished'), (2, '2020-01-17', 'Brittany Runs a Marathon', '2019', 'thoughts', 'finished'),
(2, '2020-01-18', 'Spider-Man: Into the Spiderverse', '2018', 'thoughts', 'finished'), (2, '2020-01-23', 'Mystery, Alaska', '1999', 'thoughts', 'finished'),
(2, '2020-01-28', 'Bad Boys For Life', '2020', 'thoughts', 'finished'), (2, '2020-02-01', 'Joan Jett: Bad Reputation', '2018', 'doc', 'finished'),
(2, '2020-02-02', 'A Nightmare on Elm Street', '2010', 'Good visuals, well cast. Completely unnecessary and a little boring.', 'finished'), (2, '2020-02-04', 'Blinded By The Light', '2019', 'thoughts', 'finished'),
(2, '2020-02-05', 'Miss Americana: Taylor Shift', '2020', 'doc', 'finished'), (2, '2020-02-06', 'House of the Devil', '2009', 'thoughts', 'finished'),
(2, '2020-02-08', 'Leslie Jones: Time Machine', '2020', 'stand up', 'finished'), (2, '2020-02-09', "Charlie's Angels", '2019', 'thoughts', 'finished'),
(2, '2020-02-10', 'Joker', '2019', 'pretentious and unnecessary', 'finished'), (2, '2020-02-15', 'Gemini Man', '2019', 'thoughts', 'finished'),
(2, '2020-02-16', "George Carlin ... It's Bad For You!", '2008', 'stand up', 'finished'), (2, '2020-02-21', "Nikki Glazer: Bangin'", '2019', 'stand up', 'finished'),
(2, '2020-02-23', 'Bad Boys', '1995', 'thoughts', 'finished'), (2, '2020-02-25', 'Birds of Prey', '2020', "So much energy! Great use of Harley's perspective of the world. Really dug it.", 'finished'),
(2, '2020-03-02', 'Eat Drink Laugh: The Story of the Comic Strip', '2014', 'doc', 'finished'), (2, '2020-03-13', 'Motherless Brooklyn', '2019', 'thoughts', 'finished'),
(2, '2020-03-15', 'Spenser Confidential', '2020', 'thoughts', 'finished'), (2, '2020-03-16', 'Ad Astra', '2019', 'thoughts', 'finished'),
(2, '2020-03-17', 'Marc Maron: End Times Fun', '2020', 'stand up', 'finished'), (2, '2020-03-17', 'Terminator: Dark Fate', '2019', 'Does a decent job getting the series back on the rails, but feels unnecessary. Loved the new characters.', 'finished'),
(2, '2020-03-18', 'Body Bags', '1993', 'thoughts', 'finished'), (2, '2020-03-19', 'Jay & Silent Bob Reboot', '2019', 'thoughts', 'finished'),
(2, '2020-03-19', 'Serenity', '2019', 'Disappointing, disjointed wanna be noir by way of the St. Elsewhere series finale.', 'finished'), (2, '2020-03-22', 'Pete Davidson: Alive From New York', '2020', 'stand up', 'finished'),
(2, '2020-03-24', 'Johnny Mnemonic', '1995', 'thoughts', 'finished'), (2, '2020-03-24', 'Last Shop Standing', '2012', 'doc', 'finished'),
(2, '2020-03-25', 'Bruce Springsteen: Western Stars', '2019', 'concert doc', 'finished'), (2, '2020-03-25', 'malevolent', '2018', 'thoughts', 'finished'),
(2, '2020-03-27', 'Iliza Shlesinger: Over & Over', '2018', 'doc', 'finished'), (2, '2020-03-27', 'The Last Waltz', '1978', 'concert doc', 'finished'),
(2, '2020-03-27', 'Love Gilda', '2018', 'doc', 'finished'), (2, '2020-03-28', 'Society', '1989', 'thoughts', 'finished'),
(2, '2020-03-28', 'Eye of the Beholder: The Art of Dungeons & Dragons', '2019', 'doc', 'finished'), (2, '2020-03-28', 'Jumangi: Welcome to the Jungle', '2017', 'thoughts', 'finished'),
(2, '2020-03-29', 'The Mummy', '1999', 'thoughts', 'finished'), (2, '2020-03-30', 'The Mummy Returns', '2001', 'thoughts', 'finished'),
(2, '2020-03-31', 'The Mummy: Tomb of the Dragon Emperor', '2008', 'thoughts', 'finished'), (2, '2020-04-03', 'Nightmare in Red, White, & Blue', '2009', 'doc', 'finished'),
(2, '2020-04-03', 'American Scary', '2006', 'doc', 'finished'), (2, '2020-04-03', 'Forgetting Sarah Marshall', '2008', 'thoughts', 'finished'),
(2, '2020-04-04', 'The Image Revolution', '2014', 'doc', 'finished'), (2, '2020-04-04', 'Solo: A Star Wars Story', '2018', 'thoughts', 'finished'),
(2, '2020-04-05', 'Iron Man', '2008', 'thoughts', 'finished'), (2, '2020-04-06', "Doomed: The Untold Story of Roger Corman's The Fantastic Four", '2015', 'doc', 'finished'),
(2, '2020-04-06', 'Taylor Tomilson: Quarter-Life Crisis', '2020', 'stand up', 'finished'), (2, '2020-04-07', 'The Other Guys', '2010', 'thoughts', 'finished'),
(2, '2020-04-07', 'Iron Man 2', '2010', 'thoughts', 'finished'), (2, '2020-04-07', 'The Ninth Configuration', '1980', 'thoughts', 'finished'),
(2, '2020-04-08', 'Iron Man 3', '2013', 'thoughts', 'finished'), (2, '2020-04-09', "Marvel's The Avengers", '2012', 'thoughts', 'finished'),
(2, '2020-04-10', 'Joan Didion: The Center Will Not Hold', '2017', 'doc', 'finished'), (2, '2020-04-10', 'Before I Wake', '2016', 'thoughts', 'finished'),
(2, '2020-04-11', 'Thor', '2011', 'thoughts', 'finished'), (2, '2020-04-12', 'Thor: The Dark World', '2013', 'thoughts', 'finished'),
(2, '2020-04-12', 'Captain America: The Winter Soldier', '2014', 'thoughts', 'finished'), (2, '2020-04-14', 'Avengers: Age of Ultron', '2015', 'thoughts', 'finished'),
(2, '2020-04-15', 'Guardians of the Galaxy', '2014', 'thoughts', 'finished'), (2, '2020-04-16', 'Ant-Man', '2015', 'thoughts', 'finished'),
(2, '2020-04-17', 'Captain America: Civil War', '2016', 'thoughts', 'finished'), (2, '2020-04-18', 'Guardians of the Galaxy, Vol 2', '2017', 'thoughts', 'finished'),
(2, '2020-04-19', 'First Blood', '1982', 'thoughts', 'finished'), (2, '2020-04-19', 'Margaret Atwood: A Word after a Word after a Word', '2019', 'doc', 'finished'),
(2, '2020-04-19', 'Spider-Man: Homecoming', '2017', 'thoughts', 'finished'), (2, '2020-04-20', 'Doctor Strange', '2016', 'thoughts', 'finished'),
(2, '2020-04-21', 'Thor: Ragnarok', '2017', 'thoughts', 'finished'), (2, '2020-04-22', 'Black Panther', '2018', 'thoughts', 'finished'),
(2, '2020-04-23', 'Ant-Man & the Wasp', '2018', 'thoughts', 'finished'), (2, '2020-04-24', 'Captain Marvel', '2019', 'thoughts', 'finished'),
(2, '2020-04-25', 'Avengers: Infinity War', '2018', 'thoughts', 'finished'), (2, '2020-04-26', 'Avengers: Endgame', '2019', 'thoughts', 'finished'),
(2, '2020-04-27', 'The Inventor: Out for Blood in Silicon Valley', '2018', 'doc', 'finished'), (2, '2020-04-27', 'Spider-Man: Far From Home', '2019', 'thoughts', 'finished'),
(2, '2020-04-28', 'Star Trek', '2009', 'thoughts', 'finished'), (2, '2020-04-29', 'Star Trek Into Darkness', '2013', 'thoughts', 'finished'),
(2, '2020-04-30', 'Star Trek Beyond', '2016', 'thoughts', 'finished'), (2, '2020-05-03', 'Skyfall', '2012', 'thoughts', 'finished'),
(2, '2020-05-04', 'F/X', '1986', 'thoughts', 'finished'), (2, '2020-05-04', 'Spectre', '2015', 'thoughts', 'finished'),
(2, '2020-05-05', 'Mindgamers', '2017', 'terrible and boring', 'abandoned'), (2, '2020-05-05', 'Antartica: A Year on Ice', '2013', 'doc', 'finished'),
(2, '2020-05-06', 'House', '1986', 'thoughts', 'finished'), (2, '2020-05-07', 'Extraction', '2020', 'thoughts', 'finished'),
(2, '2020-05-08', 'title', 'year', 'thoughts', 'finished'), (2, '2020-05-09', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-05-10', 'title', 'year', 'thoughts', 'finished'), (2, '2020-05-10', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-05-10', 'title', 'year', 'thoughts', 'finished'), (2, '2020-05-11', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-05-12', 'title', 'year', 'thoughts', 'finished'), (2, '2020-05-13', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-05-14', 'title', 'year', 'thoughts', 'finished'), (2, '2020-05-15', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-05-15', 'title', 'year', 'thoughts', 'finished'), (2, '2020-05-16', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-05-16', 'title', 'year', 'thoughts', 'finished'), (2, '2020-05-16', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-05-17', 'title', 'year', 'thoughts', 'finished'), (2, '2020-05-17', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-05-18', 'title', 'year', 'thoughts', 'finished'), (2, '2020-05-19', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-05-20', 'title', 'year', 'thoughts', 'finished'), (2, '2020-05-21', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-05-21', 'title', 'year', 'thoughts', 'finished'), (2, '2020-05-22', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-05-22', 'title', 'year', 'thoughts', 'finished'), (2, '2020-05-23', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-05-23', 'title', 'year', 'thoughts', 'finished'), (2, '2020-05-23', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-05-24', 'title', 'year', 'thoughts', 'finished'), (2, '2020-05-26', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-05-28', 'title', 'year', 'thoughts', 'finished'), (2, '2020-05-30', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-05-30', 'title', 'year', 'thoughts', 'finished'), (2, '2020-05-31', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-06-04', 'title', 'year', 'thoughts', 'finished'), (2, '2020-06-09', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-06-10', 'title', 'year', 'thoughts', 'finished'), (2, '2020-06-12', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-06-12', 'title', 'year', 'thoughts', 'finished'), (2, '2020-06-12', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-06-13', 'title', 'year', 'thoughts', 'finished'), (2, '2020-06-14', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-06-15', 'title', 'year', 'thoughts', 'finished'), (2, '2020-06-16', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-06-16', 'title', 'year', 'thoughts', 'finished'), (2, '2020-06-17', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-06-17', 'title', 'year', 'thoughts', 'finished'), (2, '2020-06-18', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-06-21', 'title', 'year', 'thoughts', 'finished'), (2, '2020-06-21', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-06-21', 'title', 'year', 'thoughts', 'finished'), (2, '2020-06-22', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-06-25', 'title', 'year', 'thoughts', 'finished'), (2, '2020-06-26', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-06-29', 'title', 'year', 'thoughts', 'finished'), (2, '2020-07-01', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-07-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-07-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-07-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-07-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-07-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-07-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-07-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-07-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-07-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-07-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-07-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-07-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-07-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-07-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-07-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-07-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-07-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-07-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-07-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-07-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-07-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-07-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-07-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-07-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-07-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-07-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),
(2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'), (2, '2020-01-00', 'title', 'year', 'thoughts', 'finished'),





-- media table insert TELEVISION dummy data
INSERT INTO "media" ("media_type_id", "title_television", "season_television", "episode_television", "thoughts_television", "status_television")
VALUES (3, 'title', 'season', 'episode', 'thoughts', 'finished')





-- media table insert PODCAST dummy data
INSERT INTO "media" ("media_type_id", "title_podcast", "season_podcast", "episode_podcast", "thoughts_podcast", "status_podcast")
VALUES (4, 'title', 'season', 'episode', 'thoughts', 'finished')


