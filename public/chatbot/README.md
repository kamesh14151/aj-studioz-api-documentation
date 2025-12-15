# AJ STUDIOZ AI Chatbot

A beautiful, modern HTML-based AI chatbot powered by the AJ STUDIOZ API. This chatbot provides an intuitive interface for users to interact with AI models through a simple web interface.

## 🚀 Features

- **Beautiful UI**: Modern, responsive design with gradient backgrounds and smooth animations
- **Real-time Chat**: Instant messaging interface with typing indicators
- **AJ STUDIOZ API Integration**: Built specifically for AJ STUDIOZ API endpoints
- **Easy Setup**: Simple configuration with API key and endpoint
- **NPX Support**: Can be run instantly with `npx aj-studioz-chatbot`
- **Mobile Responsive**: Works perfectly on desktop and mobile devices
- **Error Handling**: Graceful error handling with user-friendly messages

## 📦 Quick Start with NPX

```bash
npx aj-studioz-chatbot
```

This will start the chatbot server and automatically open your browser to `http://localhost:3001`.

## 🛠️ Manual Installation

1. **Clone or Download**
   ```bash
   git clone https://github.com/kamesh14151/aj-studioz-api-documentation.git
   cd aj-studioz-api-documentation/public/chatbot
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Server**
   ```bash
   npm start
   ```

4. **Open Browser**
   Navigate to `http://localhost:3001`

## ⚙️ Configuration

Before using the chatbot with your AJ STUDIOZ API, you need to configure it:

1. **Open `aj-studioz-chatbot.html`**
2. **Find the AJ_STUDIOZ_CONFIG object**
3. **Update the following values**:

```javascript
const AJ_STUDIOZ_CONFIG = {
    endpoint: 'https://your-actual-api-endpoint.com/v1/chat/completions',
    apiKey: 'your-actual-aj-studioz-api-key',
    model: 'your-model-name',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer your-actual-aj-studioz-api-key'
    }
};
```

## 📚 Documentation

For more information about AJ STUDIOZ API:
- **API Documentation**: https://docs.ajstudioz.in
- **Getting Started**: https://docs.ajstudioz.in/docs/getting-started
- **Authentication**: https://docs.ajstudioz.in/docs/key-information/authentication

## 🆘 Support

- **GitHub**: https://github.com/kamesh14151/aj-studioz-api-documentation
- **Documentation**: https://docs.ajstudioz.in

**Made with ❤️ by AJ STUDIOZ**
