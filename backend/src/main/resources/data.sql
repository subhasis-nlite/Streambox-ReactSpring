DELETE FROM media;

INSERT INTO media (title, description, poster_url, banner_url, video_url, genre, release_year, duration_minutes)
VALUES
    ('Interstellar',
     'A team of explorers travel through a wormhole in space in an attempt to ensure humanity''s survival.',
     'https://via.placeholder.com/300x450?text=Interstellar',
     'https://via.placeholder.com/1200x400?text=Interstellar+Banner',
     'https://www.w3schools.com/html/mov_bbb.mp4',
     'Sci-Fi',
     2014,
     169),

    ('Inception',
     'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.',
     'https://via.placeholder.com/300x450?text=Inception',
     'https://via.placeholder.com/1200x400?text=Inception+Banner',
     'https://www.w3schools.com/html/movie.mp4',
     'Sci-Fi',
     2010,
     148),

    ('The Dark Knight',
     'Batman sets out to dismantle the remaining criminal organizations that plague Gotham.',
     'https://via.placeholder.com/300x450?text=Dark+Knight',
     'https://via.placeholder.com/1200x400?text=Dark+Knight+Banner',
     'https://www.w3schools.com/html/mov_bbb.mp4',
     'Action',
     2008,
     152);