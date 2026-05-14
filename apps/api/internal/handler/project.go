package handler

import (
	"encoding/json"
	"net/http"

	"github.com/KagaSumi/Portfolio/apps/api/internal/model"
	"github.com/KagaSumi/Portfolio/apps/api/internal/service"
)

type ProjectHandler struct {
	service *service.ProjectService
}

func NewProjectHandler(s *service.ProjectService) *ProjectHandler {
	return &ProjectHandler{service: s}
}

func (h *ProjectHandler) GetProjects(w http.ResponseWriter, r *http.Request) {
	projects, err := h.service.GetProjects()
	if err != nil {
		http.Error(w, "failed to fetch projects", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(projects)
}

func (h *ProjectHandler) SubmitProject(w http.ResponseWriter, r *http.Request) {
	var msg model.Project

	if err := json.NewDecoder(r.Body).Decode(&msg); err != nil {
		http.Error(w, "invalid JSON", http.StatusBadRequest)
		return
	}

	if err := h.service.Submit(msg); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusCreated)
}
