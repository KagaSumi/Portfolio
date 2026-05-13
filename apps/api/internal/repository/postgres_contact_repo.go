package repository

import (
    "context"

    "github.com/jackc/pgx/v5/pgxpool"
    "github.com/KagaSumi/Portfolio/apps/api/internal/model"
)

type PostgresContactRepo struct {
    db *pgxpool.Pool
}

func NewPostgresContactRepo(db *pgxpool.Pool) *PostgresContactRepo {
    return &PostgresContactRepo{db: db}
}

func (r *PostgresContactRepo) Save(msg model.ContactMessage) error {
    _, err := r.db.Exec(
        context.Background(),
        `INSERT INTO contact_messages (name, email, message) VALUES ($1, $2, $3)`,
        msg.Name,
        msg.Email,
        msg.Message,
    )
    return err
}

func (r *PostgresContactRepo) GetAll() ([]model.ContactMessage, error) {
    rows, err := r.db.Query(context.Background(),
        `SELECT name, email, message FROM contact_messages`,
    )
    if err != nil {
        return nil, err
    }
    defer rows.Close()

    var out []model.ContactMessage

    for rows.Next() {
        var m model.ContactMessage
        rows.Scan(&m.Name, &m.Email, &m.Message)
        out = append(out, m)
    }

    return out, nil
}
