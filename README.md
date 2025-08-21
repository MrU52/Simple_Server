# Node.js API Test Server

A minimal, secure Express.js API server for testing REST endpoints with browser-friendly JSON responses.

## 🚀 Quick Start
```bash
npm install
npm start
```
Server runs at: **http://localhost:3000**

---

## 🛠️ What Technologies Were Used

### **Core Framework**
- **Express.js 4.21.2** - Web framework that simplifies Node.js server creation
  - Replaces complex URL parsing with simple `app.get('/route', handler)`
  - Built-in JSON parsing and response handling
  - Much cleaner code than vanilla Node.js

### **Security Packages**
- **Helmet.js** - Automatically adds 15+ security headers
  - `X-Frame-Options`, `X-Content-Type-Options`, etc.
  - Prevents common web vulnerabilities
- **CORS** - Handles cross-origin requests safely
  - Allows browser requests from different domains

### **Development Tools**
- **Morgan** - HTTP request logger
  - Logs every API call to console for debugging
- **Nodemon** - Auto-restart development server
  - Watches files and restarts server on changes

---

## 🔧 How It Works

### **1. Server Setup**
```javascript
const app = express();
app.use(helmet());           // Security headers
app.use(cors());             // Cross-origin support
app.use(morgan('combined')); // Request logging
app.listen(3000);            // Start server
```

### **2. Smart JSON Response System**
The server detects if the request is from a browser or API client:

**Browser Request** → Returns pretty HTML with "Back" button
```html
<html>
  <body>
    <a href="/">← Back</a>
    <pre>{ "status": "healthy" }</pre>
  </body>
</html>
```

**API Request** → Returns clean JSON
```json
{ "status": "healthy" }
```

### **3. Query Parameter Support**
All endpoints support filtering and customization:
```bash
/health?detailed=true          # Detailed system info
/time?format=iso              # ISO timestamp format
/headers?filter=accept        # Filter specific headers
/json?count=5&type=primary    # Limit and filter data
/echo?format=pretty           # Pretty HTML response
```

---

## 📍 API Endpoints

| Endpoint | Method | Purpose | Parameters |
|----------|---------|---------|------------|
| `/health` | GET | Server health check | `detailed=true` |
| `/time` | GET | Current timestamp | `format=iso/unix/local` |
| `/headers` | GET | Request headers | `filter=text`, `exclude=text` |
| `/json` | GET | Sample JSON data | `count=N`, `type=primary`, `active=true` |
| `/echo` | GET/POST | Echo request data | `format=json/text/pretty`, `headers=true` |

---

## 📁 Project Structure
```
├── server.js           # Main Express server (234 lines)
├── package.json        # Dependencies and scripts
├── public/
│   ├── index.html     # Web interface
│   └── style.css      # Dark theme styling
└── README.md          # This documentation
```

---

## ⚡ Benefits Over Vanilla Node.js

| Feature | Vanilla Node.js | Express.js |
|---------|-----------------|------------|
| **Code Length** | 258 lines | 234 lines |
| **Routing** | Manual URL parsing | `app.get('/route')` |
| **Security** | None | Production-ready |
| **Logging** | Basic console.log | Professional request logs |
| **JSON Parsing** | Manual parsing | Built-in `express.json()` |
| **Static Files** | Complex file serving | `express.static()` |

---

## 🔒 Security Features
- ✅ **Zero vulnerabilities** (verified with `npm audit`)
- ✅ **15+ security headers** automatically added
- ✅ **Cross-origin protection** with CORS
- ✅ **Input validation** and safe JSON parsing
- ✅ **XSS protection** with proper HTML escaping

---

## 📜 Available Scripts
```bash
npm start     # Start the server
npm run dev   # Development mode (auto-restart on changes)
```

This Express.js approach gives you **more functionality with cleaner, more maintainable code** than vanilla Node.js!
