package main

import (
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"

	"github.com/KagaSumi/Portfolio/apps/api/internal/handler"
	"github.com/KagaSumi/Portfolio/apps/api/internal/repository"
	"github.com/KagaSumi/Portfolio/apps/api/internal/service"
)

func main() {
	r := chi.NewRouter()

	// Projects
	projectRepo := repository.MemoryProjectRepo{}
	projectService := service.NewProjectService(projectRepo)
	projectHandler := handler.NewProjectHandler(projectService)

	// Contact
	contactRepo := &repository.MemoryContactRepo{}
	contactService := service.NewContactService(contactRepo)
	contactHandler := handler.NewContactHandler(contactService)

	// Routes
	r.Get("/projects", projectHandler.GetProjects)
	r.Post("/contact", contactHandler.SubmitContact)

	r.Get("/health", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("ok"))
	})

	log.Println("API running on :8080")
	http.ListenAndServe(":8080", r)
}
