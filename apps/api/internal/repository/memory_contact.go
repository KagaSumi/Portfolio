package repository

import "github.com/KagaSumi/Portfolio/apps/api/internal/model"

type MemoryContactRepo struct {
    data []model.ContactMessage
}

func (r *MemoryContactRepo) Save(msg model.ContactMessage) error {
    r.data = append(r.data, msg)
    return nil
}

func (r *MemoryContactRepo) GetAll() ([]model.ContactMessage, error) {
    return r.data, nil
}
