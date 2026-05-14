package service

import (
	"github.com/KagaSumi/Portfolio/apps/api/internal/model"
	"github.com/KagaSumi/Portfolio/apps/api/internal/repository"
)

type ProjectService struct {
	repo repository.ProjectRepository
}

func NewProjectService(r repository.ProjectRepository) *ProjectService {
	return &ProjectService{repo: r}
}

func (s *ProjectService) GetProjects() ([]model.Project, error) {
	return s.repo.GetAll()
}

func (s *ProjectService) Submit(p model.Project) error {
	return s.repo.Create(p)
}
