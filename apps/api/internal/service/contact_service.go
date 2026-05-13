package service

import (
    "github.com/KagaSumi/Portfolio/apps/api/internal/model"
    "github.com/KagaSumi/Portfolio/apps/api/internal/repository"
)

type ContactService struct {
    repo repository.ContactRepository
}

func NewContactService(r repository.ContactRepository) *ContactService {
    return &ContactService{repo: r}
}

func (s *ContactService) Submit(msg model.ContactMessage) error {
    return s.repo.Save(msg)
}
