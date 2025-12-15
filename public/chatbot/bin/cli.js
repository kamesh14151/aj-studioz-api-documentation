#!/usr/bin/env node

const express = require('express');
const path = require('path');
const open = require('open');

const app = express();
const PORT = 3001;

// Serve static files
app.use(express.static(path.join(__dirname, '..')));

// Serve the main chatbot
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'aj-studioz-chatbot.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'AJ STUDIOZ Chatbot is running' });
});

app.listen(PORT, () => {
    console.log(`
🚀 AJ STUDIOZ AI Chatbot is running!
📍 URL: http://localhost:${PORT}
🤖 Ready to chat with AJ STUDIOZ AI Assistant
⚙️  Configure your API key in aj-studioz-chatbot.html to get started
    `);
    
    // Open browser automatically
    open(`http://localhost:${PORT}`);
});