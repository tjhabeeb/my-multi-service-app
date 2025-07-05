from flask import Flask, jsonify
import mysql.connector
import os

app = Flask(__name__)

# Database configuration from environment variables
db_config = {
    'host': os.environ.get('DB_HOST', 'db'),
    'user': os.environ.get('DB_USER', 'user'),
    'password': os.environ.get('DB_PASSWORD', 'userpass'),
    'database': os.environ.get('DB_NAME', 'mydb')
}

@app.route('/api/hello')
def hello():
    try:
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor()
        cursor.execute("SELECT 'Hello from Database!'")
        result = cursor.fetchone()
        conn.close()
        return jsonify(message=result[0])
    except Exception as e:
        return jsonify(error=str(e))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
