# Start from the official Golang image (with go installed)
<<<<<<< HEAD
FROM golang:1.25
=======
FROM golang:1.25-bookworm
>>>>>>> 7036d03a4f5863905236c5540abcd5343ca1efcb

# Set the Current Working Directory inside the container
WORKDIR /app

# Install necessary tools (like Air for live reload in development)
# RUN go install github.com/air-verse/air@latest

# Copy go.mod and go.sum files first
COPY go.mod go.sum ./

# Download all dependencies (better cache usage)
RUN go mod download

# Copy the rest of the application code
COPY . .

# Expose application port (adjust if needed)
# Command to run the app with hot reload
# CMD ["air", "--build.exclude_dir", "./posts", "--build.exclude_regex", ".md,.html"]

RUN go build -o lol

EXPOSE 8000

CMD ["/app/lol"]
