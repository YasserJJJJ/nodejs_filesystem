# Node.js File System Project

A Node.js project demonstrating file system operations such as reading, writing, and processing text and JSON files using the built-in `fs` module.

This project focuses on understanding asynchronous file handling and data transformation in Node.js.

---

## 📌 Features

- Read text files using `fs.readFile`
- Parse dynamic file names
- Read JSON data
- Write processed output to new files
- Practice asynchronous callbacks
- Understand file system errors (ENOENT, undefined, etc.)
- Containerized with Docker

---

## 🛠 Tech Stack

- Node.js
- JavaScript (ES Modules)
- Built-in `fs` module
- Docker


---
## 📂 Project Structure

```bash
.
├── index.js        # Main application logic
├── data.json       # Sample JSON data
├── start.txt       # Starting file reference
├── random.txt      # Sample text file
├── output.txt      # Generated output file
├── Dockerfile      # Container configuration
└── README.md
---

## 🚀 How To Run The Project

There are two ways to run this application:

---

### 🟢 Option 1 — Run With Node.js (Local)

Make sure Node.js (v18+) is installed.

1. Clone the repository:

```bash
git clone https://github.com/YasserJJJJ/nodejs_filesystem.git


### 🐳 Option 2 — Run With Docker

Make sure Docker is installed on your machine.



```bash
docker build -t node-file-processor                     #  Build the Docker image
docker run node-file-processor                          #   run the container
docker run -v $(pwd):/app node-file-processor           # ( Optional) persist generated files locally



