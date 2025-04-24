package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/api/hello", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello from Go server!"))
	})

	fmt.Println("Go server listening on port 8080")
	http.ListenAndServe(":8080", nil)
}
