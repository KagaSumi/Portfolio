package repository

import (
	"context"

	"github.com/jackc/pgx/v5/pgxpool"

	"github.com/KagaSumi/Portfolio/apps/api/internal/model"
)

type PostgresProjectRepo struct {
	db *pgxpool.Pool
}

func NewPostgresProjectRepo(db *pgxpool.Pool) *PostgresProjectRepo {
	return &PostgresProjectRepo{db: db}
}

func (r *PostgresProjectRepo) GetAll() ([]model.Project, error) {
	rows, err := r.db.Query(context.Background(), `
		SELECT id, title, description, stack, github
		FROM projects
		ORDER BY id DESC
	`)
	if err != nil {
		return nil, err
	}

	defer rows.Close()

	var projects []model.Project

	for rows.Next() {
		var p model.Project

		err := rows.Scan(
			&p.ID,
			&p.Title,
			&p.Description,
			&p.Stack,
			&p.Github,
		)
		if err != nil {
			return nil, err
		}

		projects = append(projects, p)
	}

	return projects, nil
}

func (r *PostgresProjectRepo) Create(p model.Project) error {
	_, err := r.db.Exec(context.Background(), `
		INSERT INTO projects (title, description, stack, github)
		VALUES ($1, $2, $3, $4)
	`, p.Title, p.Description, p.Stack, p.Github)

	return err
}
