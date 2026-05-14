package service

import "github.com/KagaSumi/Portfolio/apps/api/internal/model"

type ProjectRepository interface {
	GetAll() []model.Project
}

type ProjectService struct {
	repo ProjectRepository
}

func NewProjectService(r ProjectRepository) *ProjectService {
	return &ProjectService{repo: r}
}

func (s *ProjectService) GetProjects() []model.Project {
	return s.repo.GetAll()
}
