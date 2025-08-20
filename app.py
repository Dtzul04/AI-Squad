from flask import Flask, render_template, request, jsonify
from dotenv import load_dotenv
import os
from groq import Groq

# Load environment variables from .env
load_dotenv()

# Initialize Groq client
client = Groq(api_key=os.getenv("GROQ_API_KEY"))

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/process", methods=["POST"])
def process_resume():
    resume_text = request.get_json().get("text", "")

    try:
        completion = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {"role": "system", "content": "You are a helpful assistant that reviews resumes."},
                {"role": "user", "content": resume_text}
            ]
        )

        # Some Groq SDKs return dict-like objects, so handle both safely
        choice = completion.choices[0]
        if hasattr(choice.message, "content"):  
            ai_result = choice.message.content
        else:
            ai_result = choice["message"]["content"]

    except Exception as e:
        ai_result = f"❌ Groq API Error: {str(e)}"

    return jsonify({"result": ai_result})

if __name__ == "__main__":
    app.run(debug=True)
