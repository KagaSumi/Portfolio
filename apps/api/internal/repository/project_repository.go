package repository

import "github.com/KagaSumi/Portfolio/apps/api/internal/model"

type ProjectRepository interface {
	GetAll() []model.Project
}
