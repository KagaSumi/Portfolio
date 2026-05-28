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

	// 1. Decode JSON body
	if err := json.NewDecoder(r.Body).Decode(&msg); err != nil {
		http.Error(w, "invalid JSON", http.StatusBadRequest)
		return
	}

	// 2. Call service once
	if err := h.service.Submit(msg); err != nil {
		//http.Error(w, "failed to save message", http.StatusInternalServerError)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(map[string]string{
		"message": "received",
})
}
