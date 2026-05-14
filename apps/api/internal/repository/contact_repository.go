package repository

import "github.com/KagaSumi/Portfolio/apps/api/internal/model"

type ContactRepository interface {
    Save(msg model.ContactMessage) error
    GetAll() ([]model.ContactMessage,error)
}
