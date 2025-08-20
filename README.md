# AI Squad - Resume Helper Web App

This is a web application built with **Flask**, **TailwindCSS**, **Alpine.js**, and **Groq**.  
It uses Python for the backend and modern frontend tools for interactive AI-powered resume review.

---

## 🌐 Live Demo
Try the app online here: [AI Squad Live](https://ai-squad-fpiz.onrender.com)

---

## 🚀 Features
- **Flask**: Backend server and routing
- **TailwindCSS**: Modern styling
- **Alpine.js**: Frontend interactivity
- **Groq API**: AI-powered resume analysis
- **.env file**: Secure storage for API keys and environment variables

---

## 📂 Project Structure
.
├── LICENSE
├── README.md
├── app.py # Flask application
├── requirements.txt # Python dependencies
├── package-lock.json # Node dependencies
├── static/ # CSS, JS, images
├── templates/ # HTML templates
├── venv/ # Virtual environment (ignored by Git)
└── pycache/ # Python cache (ignored by Git)

---

## ⚙️ Installation & Setup

1. Clone the repository:
```bash
    git clone https://github.com/Dtzul04/AI-Squad.git
    cd AI-Squad
    Create & activate a virtual environment:

2. Create & activate a virtual environment:

    python -m venv venv
    # Mac/Linux
    source venv/bin/activate
    # Windows
    venv\Scripts\activate

3. Install dependencies:

    pip install -r requirements.txt


4. Set environment variables - create a .env file in the project root:

    GROQ_API_KEY=your_api_key_here
    LASK_ENV=development

5. Run the app locally:

    python app.py

The app will be available at:
👉 http://127.0.0.1:5000

🛠️ Deployment
This project is deployed using Render:

1. Fork or clone this repo.
2. Set environment variables (GROQ_API_KEY, FLASK_ENV) in Render.
3. Connect the repository to Render.
4. Click Deploy to publish your web service.
5. Your app will be live with a Render-generated URL.

📜 License
This project is licensed under the MIT License.