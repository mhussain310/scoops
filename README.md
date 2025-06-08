# 📰 Scoops

**Scoops** is a simple news reader application built with **React 17** and **Redux**, designed to fetch and display the latest headlines using the [NewsAPI](https://newsapi.org/).

---

## 🚀 Features

- Fetches news articles from [NewsAPI](https://newsapi.org/)
- Built with React 17 and Redux
- Dockerized for seamless local development

---

## 🛠️ Getting Started

> ⚠️ You must have [Docker](https://www.docker.com/get-started) installed.

### 1. Clone the repository

```bash
git clone https://github.com/mhussain310/scoops.git
cd scoops
```

### 2. Get a NewsAPI Key

Head to https://newsapi.org/ and sign up for a free API key.

### 3. Create a `.env` file in the root of the project and insert your API key.

```bash
REACT_APP_API_KEY=your_newsapi_key_here
```

### 4. Start Docker Engine

### 5. Build the Docker image

```bash
docker build -t scoops .
```

### 6. Run the app

```bash
docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3000:3000 scoops
```

### 7. Open in your browser

Visit http://localhost:3000 to see the app running.
