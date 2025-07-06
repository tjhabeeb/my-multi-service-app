🚀 Multi-Service Web Application with Docker & Docker Compose
This project demonstrates a simple multi-service web application using Docker and Docker Compose. It consists of:

🌐 A static Frontend (HTML + JavaScript)

🐍 A Python Flask Backend API

🐬 A MySQL Database

All services run inside isolated Docker containers.

📁 Project Structure
perl
Copy
Edit
my-multi-service-app/
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/
│   ├── index.html
│   └── Dockerfile
├── docker-compose.yml
└── README.md
⚙️ Technologies Used
Docker

Docker Compose

Python Flask

MySQL

Nginx (for frontend static file serving)

🚀 How to Run the Project
1️⃣ Prerequisites
Docker installed and running

Docker Compose installed

2️⃣ Clone the Repository
bash
Copy
Edit
git clone https://github.com/tjhabeeb/my-multi-service-app.git
cd my-multi-service-app
3️⃣ Build and Run All Containers
bash
Copy
Edit
docker-compose up --build
✅ Frontend: http://localhost:8080
✅ Backend API: http://localhost:5000/api/hello
✅ MySQL Database: Running on port 3306 (internal use)

📝 Services Overview
Service	Port	Description
Frontend	8080	Serves static HTML + calls the backend
Backend	5000	Python Flask API + connects to database
Database	3306	MySQL with persistent volume

📡 Environment Variables
The backend service uses the following environment variables:

Variable	Value	Description
DB_HOST	db	Docker service name
DB_USER	user	MySQL username
DB_PASSWORD	userpass	MySQL password
DB_NAME	mydb	MySQL database name

💾 Persistent Storage
MySQL uses a Docker volume (db_data) to persist data across container restarts.

🔗 Sample API Response
json
Copy
Edit
{
  "message": "Hello from Database!"
}
📦 Stopping the Containers
bash
Copy
Edit
docker-compose down
🌟 Future Improvements
Add user input and store/retrieve from database

Implement authentication

Add reverse proxy (NGINX) for unified port access

Deploy to Docker Hub or cloud platforms