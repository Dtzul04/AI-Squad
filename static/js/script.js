// Global error handler
window.addEventListener("error", (e) => {
    console.error("Unexpected error:", e.message);
    alert("Something went wrong: " + e.message);
});

// Alpine.js component
document.addEventListener("alpine:init", () => {
    Alpine.data("resumeApp", () => ({
        resumeText: '',
        aiResult: '',
        loading: false,

        async processResume() {
            if (!this.resumeText.trim()) {
                this.aiResult = '⚠️ Please paste your resume first.';
                return;
            }
            this.loading = true;
            this.aiResult = '';
            try {
                const response = await fetch('/process', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ text: this.resumeText })
                });
                const data = await response.json();
                this.aiResult = data.result;
                // Scroll suggestion box to bottom after AI output
                this.$nextTick(() => this.scrollToBottom());
            } catch (error) {
                this.aiResult = '❌ Error connecting to server.';
            } finally {
                this.loading = false;
            }
        },

        scrollToBottom() {
            const suggestionBox = document.getElementById("suggestion");
            suggestionBox.scrollTop = suggestionBox.scrollHeight;
        }
    }));
});
