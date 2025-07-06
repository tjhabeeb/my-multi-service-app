
🏆 Sports Hub – Multi-Service Web Application (Dockerized)

This is a Dockerized sports web application with:
- A Frontend (HTML, CSS, JavaScript) served by Nginx
- A Backend API built with Flask (Python)
- A MySQL Database storing sports scores

📦 Project Structure

sports-hub/
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   └── Dockerfile
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
├── docker-compose.yml
└── README.md

🚀 Technologies Used
- Frontend: HTML, CSS, JavaScript, Nginx
- Backend: Python Flask API
- Database: MySQL 5.7
- Containerization: Docker & Docker Compose

🛠 How to Run the Project

1️⃣ Clone the Repository:
git clone https://github.com/tjhabeeb/sports-hub-dockerized.git
cd sports-hub

2️⃣ Build and Run Containers:
docker-compose up --build

Frontend: http://localhost:8080
Backend API: http://localhost:5000/api/scores
MySQL: localhost:3306

🛢 Database Setup (Initial Load)

1. Access MySQL inside the container:
docker exec -it sports-hub_db_1 mysql -u user -p
(password: userpass)

2. Create the table and sample data:
USE sportsdb;

CREATE TABLE scores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  match_name VARCHAR(255),
  score VARCHAR(50),
  status VARCHAR(50)
);

INSERT INTO scores (match_name, score, status) VALUES
('Team A vs Team B', '2 - 1', 'Full Time'),
('Team C vs Team D', '1 - 3', 'Half Time');

🌐 Features

- Live Scores: Pulled dynamically from Flask + MySQL
- Responsive Design: Looks good on mobile & desktop
- Microservices Architecture: Each service runs independently in its own container

📝 Environment Variables

DB_HOST: db
DB_USER: user
DB_PASSWORD: userpass
DB_NAME: sportsdb

📄 License
This project is for educational purposes only.
