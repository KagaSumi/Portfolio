package model

type Project struct {
	Title       string   `json:"title"`
	Description string   `json:"description"`
	Stack       []string `json:"stack"`
	Github      string   `json:"github"`
}
