const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files
app.use(express.static(__dirname));

// Serve the main chatbot
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'aj-studioz-chatbot.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        message: 'AJ STUDIOZ Chatbot is running',
        timestamp: new Date().toISOString()
    });
});

// API configuration endpoint (for setup help)
app.get('/setup', (req, res) => {
    res.json({
        message: 'AJ STUDIOZ Chatbot Setup',
        steps: [
            '1. Get your API key from AJ STUDIOZ dashboard',
            '2. Replace "your-aj-studioz-api-key-here" in aj-studioz-chatbot.html',
            '3. Update the endpoint URL to your actual AJ STUDIOZ API endpoint',
            '4. Configure the model name according to your setup'
        ],
        documentation: 'https://docs.ajstudioz.in'
    });
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`
🚀 AJ STUDIOZ AI Chatbot Server
📍 Running on: http://localhost:${PORT}
🤖 Chatbot URL: http://localhost:${PORT}
⚙️  Setup guide: http://localhost:${PORT}/setup
📚 Documentation: https://docs.ajstudioz.in
        `);
    });
}

module.exports = app;