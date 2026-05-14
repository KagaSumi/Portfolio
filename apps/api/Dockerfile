# =========================
# Build Stage
# =========================
FROM golang:1.25-alpine AS builder

WORKDIR /app

# Download dependencies first
COPY go.mod go.sum ./

RUN go mod download

# Copy source
COPY . .

# Build binary
RUN go build -o server ./cmd/server


# =========================
# Production Stage
# =========================
FROM alpine:latest

WORKDIR /app

COPY --from=builder /app/server .

EXPOSE 8080

CMD ["./server"]
