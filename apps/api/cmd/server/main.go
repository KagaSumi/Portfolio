package main

import (
	"context"
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/jackc/pgx/v5/pgxpool"

	"github.com/KagaSumi/Portfolio/apps/api/internal/handler"
	"github.com/KagaSumi/Portfolio/apps/api/internal/repository"
	"github.com/KagaSumi/Portfolio/apps/api/internal/service"
)

func main() {
	r := chi.NewRouter()

	// --------------------
	// Projects (memory only)
	// --------------------
	projectRepo := repository.MemoryProjectRepo{}
	projectService := service.NewProjectService(projectRepo)
	projectHandler := handler.NewProjectHandler(projectService)

	// --------------------
	// Contact (fallback)
	// --------------------
	var contactRepo repository.ContactRepository

	dbPool, err := pgxpool.New(
		context.Background(),
		"postgres://postgres:postgres@localhost:5432/portfolio?sslmode=disable",
	)

	if err != nil {
		log.Println("Postgres failed, using memory contact repo")
		contactRepo = &repository.MemoryContactRepo{}
	} else {
		log.Println("Postgres connected, using DB contact repo")
		contactRepo = repository.NewPostgresContactRepo(dbPool)
	}

	contactService := service.NewContactService(contactRepo)
	contactHandler := handler.NewContactHandler(contactService)

	// --------------------
	// Routes
	// --------------------
	r.Get("/projects", projectHandler.GetProjects)
	r.Post("/contact", contactHandler.SubmitContact)

	r.Get("/health", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("ok"))
	})

	log.Println("API running on :8080")
	log.Fatal(http.ListenAndServe(":8080", r))
}
