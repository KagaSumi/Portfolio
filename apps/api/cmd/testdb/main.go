package main

import (
	"context"
	"fmt"
	"log"

	"github.com/jackc/pgx/v5"
)

func main() {
	conn, err := pgx.Connect(context.Background(),
		"postgres://postgres:postgres@localhost:5432/portfolio",
	)
	if err != nil {
		log.Fatal("DB connect failed:", err)
	}
	defer conn.Close(context.Background())

	var result int
	err = conn.QueryRow(context.Background(), "SELECT 1").Scan(&result)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("DB OK:", result)
}
