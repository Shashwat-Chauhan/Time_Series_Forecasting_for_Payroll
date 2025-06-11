
---

## ⚙️ Backend Setup (FastAPI)

### 🔧 Prerequisites
- Python 3.9 or higher
- `pip` package manager

### 🛠 Setup Instructions

1. **Navigate to backend folder**:
    ```bash
    cd backend
    ```

2. **Create and activate a virtual environment**:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```

3. **Install dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

4. **Run the FastAPI server**:
    ```bash
    uvicorn main:app --reload
    ```

5. **API Endpoint**:
    | Method | Endpoint   | Description                     |
    |--------|------------|---------------------------------|
    | POST   | `/forecast`| Upload CSV to receive forecast  |

📍 The server will run at: `http://127.0.0.1:8000`

---

## 💻 Frontend Setup (React)

### 🔧 Prerequisites
- Node.js v18+

### 🛠 Setup Instructions

1. **Navigate to frontend folder**:
    ```bash
    cd frontend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the React app**:
    ```bash
    npm start
    ```

📍 The app will run at: `http://localhost:3000`

---

## 🔁 Connecting Frontend to Backend

In your React code (e.g., `FileUploader.jsx`), make sure the API call uses the correct backend URL:

```js
// For local development
axios.post("http://127.0.0.1:8000/forecast", formData);

// For deployed backend (e.g., Render)
axios.post("https://time-series-forecasting-for-payroll.onrender.com/forecast", formData);
