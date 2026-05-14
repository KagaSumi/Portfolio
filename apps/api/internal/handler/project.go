package handler

import (
	"encoding/json"
	"net/http"

	"github.com/KagaSumi/Portfolio/apps/api/internal/service"
)

type ProjectHandler struct {
	service *service.ProjectService
}

func NewProjectHandler(s *service.ProjectService) *ProjectHandler {
	return &ProjectHandler{service: s}
}

func (h *ProjectHandler) GetProjects(w http.ResponseWriter, r *http.Request) {
	projects := h.service.GetProjects()

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(projects)
}
