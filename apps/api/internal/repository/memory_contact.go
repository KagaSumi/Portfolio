package repository

import "github.com/KagaSumi/Portfolio/apps/api/internal/model"

type MemoryContactRepo struct {
    data []model.ContactMessage
}

func (r *MemoryContactRepo) Save(msg model.ContactMessage) {
    r.data = append(r.data, msg)
}

func (r *MemoryContactRepo) GetAll() []model.ContactMessage {
    return r.data
}
