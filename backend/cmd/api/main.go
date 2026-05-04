package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {

	fmt.Println("Rodando na porta 8000")
	log.Fatal(http.ListenAndServe("8000", nil))

}
