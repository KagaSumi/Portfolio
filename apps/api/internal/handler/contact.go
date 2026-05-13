package handler

import (
	"encoding/json"
	"net/http"

	"github.com/KagaSumi/Portfolio/apps/api/internal/model"
	"github.com/KagaSumi/Portfolio/apps/api/internal/service"
)

type ContactHandler struct {
	service *service.ContactService
}

func NewContactHandler(s *service.ContactService) *ContactHandler {
	return &ContactHandler{service: s}
}

func (h *ContactHandler) SubmitContact(w http.ResponseWriter, r *http.Request) {
	var msg model.ContactMessage

	if err := json.NewDecoder(r.Body).Decode(&msg); err != nil {
		http.Error(w, "invalid request", http.StatusBadRequest)
		return
	}

	h.service.Submit(msg)

	w.WriteHeader(http.StatusCreated)
}
