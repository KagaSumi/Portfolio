CREATE TABLE IF NOT EXISTS contact_messages (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    stack TEXT[],
    github TEXT
);

--Seed Data
INSERT INTO projects (
    title,
    description,
    stack,
    github
)
VALUES
(
    'Relics and Receipts',
    '2D shop management game built with SDL3',
    ARRAY['C++', 'SDL3'],
    'https://github.com/KagaSumi/Relics_and_Receipts'
),
(
    'Portfolio Platform',
    'Full-stack portfolio using React, Go, PostgreSQL, and Docker',
    ARRAY['React', 'Go', 'PostgreSQL', 'Docker'],
    'https://github.com/KagaSumi/Portfolio'
);
