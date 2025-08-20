# My Flask + Alpine.js + Tailwind Project

This is a web project built with **Flask**, **TailwindCSS**, **Alpine.js**, and **Groq**.  
It uses Python for the backend and modern frontend tools for interactivity.

---

## 🚀 Features
- Flask for backend server & routing
- TailwindCSS for styling
- Alpine.js for frontend interactivity
- Groq for AI-powered functionality
- `.env` file for environment variables (kept private, not in Git)

---

## 📂 Project Structure
.
├── LICENSE
├── README.md
├── app.py
├── requirements.txt
├── package-lock.json
├── static/ # CSS, JS, images
├── templates/ # HTML templates
├── venv/ # Virtual environment (ignored by Git)
└── pycache/ # Python cache (ignored by Git)

---

## ⚙️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd <your-project>

2. Create & activate a virtual environment:

    python -m venv venv
    source venv/bin/activate   # Mac/Linux
    venv\Scripts\activate

3. Install dependencies:

    pip install -r requirements.txt

4. Set environment variables - Create a .env file in the project root:
    ```env
    GROQ_API_KEY=your_api_key_here
    FLASK_ENV=development
    ```

5. Run the app

    python app.py

    The app will be available at:
    👉 http://127.0.0.1:5000

🛠️ Development Notes

Place all HTML templates inside templates/
Place CSS/JS/images inside static/
Tailwind can be configured in tailwind.config.js (if using a build setup)
Add .env for secrets (API keys, database URL, etc.)

📜 License

This project is licensed under the MIT License.
