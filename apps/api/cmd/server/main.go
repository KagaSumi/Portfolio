package main

import (
	"context"
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/cors"
	"github.com/jackc/pgx/v5/pgxpool"

	"github.com/KagaSumi/Portfolio/apps/api/internal/handler"
	"github.com/KagaSumi/Portfolio/apps/api/internal/repository"
	"github.com/KagaSumi/Portfolio/apps/api/internal/service"
)

func main() {
	r := chi.NewRouter()

	r.Use(cors.Handler(cors.Options{
		AllowedOrigins: []string{"http://localhost:5173"},
		AllowedMethods: []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders: []string{"Accept", "Authorization", "Content-Type"},
		ExposedHeaders: []string{"Link"},
		AllowCredentials: false,
		MaxAge: 300,
	}))

	// --------------------
	// DB (required)
	// --------------------
	ctx := context.Background()

	dbPool, err := pgxpool.New(ctx,
		"postgres://postgres:postgres@localhost:5432/portfolio?sslmode=disable",
	)
	if err != nil {
		log.Fatal("Postgres connection failed:", err)
	}
	defer dbPool.Close()

	// --------------------
	// Projects
	// --------------------
	projectRepo := repository.NewPostgresProjectRepo(dbPool)
	projectService := service.NewProjectService(projectRepo)
	projectHandler := handler.NewProjectHandler(projectService)

	// --------------------
	// Contact
	// --------------------
	contactRepo := repository.NewPostgresContactRepo(dbPool)
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
