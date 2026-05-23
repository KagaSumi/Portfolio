package repository

import "github.com/KagaSumi/Portfolio/apps/api/internal/model"

type MemoryProjectRepo struct{}

func (r MemoryProjectRepo) GetAll() ([]model.Project, error) {
    return []model.Project{
        {
            Title:       "Relics and Receipts",
            Description: "2D shop management game in C++ SDL3",
            Stack:       []string{"C++", "SDL3"},
            Github:      "https://github.com/KagaSumi/Relics_and_Receipts",
        },
    }, nil
}

func (r MemoryProjectRepo) Create(p model.Project) error {
    return nil
}
