package handler

import (
	"encoding/json"
	"net/http"
	"time"
)

type HealthResponse struct {
	Status    string    `json:"status"`
	Time      time.Time `json:"time"`
	Service   string    `json:"service"`
}

func HealthCheck(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	resp := HealthResponse{
		Status:  "ok",
		Time:    time.Now(),
		Service: "portfolio-api",
	}

	json.NewEncoder(w).Encode(resp)
}
