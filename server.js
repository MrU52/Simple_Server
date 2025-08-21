// Import Express framework
const express = require('express');
// Create Express app
const app = express();

// Parse incoming JSON requests
app.use(express.json());

// Home page - shows available API endpoints
app.get('/', (req, res) => {
    const baseUrl = `http://localhost:3000`;
    const html = `<pre>API Server

Available endpoints:
<a href="${baseUrl}/health" target="_blank">${baseUrl}/health</a>
<a href="${baseUrl}/time" target="_blank">${baseUrl}/time</a>
<a href="${baseUrl}/json" target="_blank">${baseUrl}/json</a>
<a href="${baseUrl}/echo" target="_blank">${baseUrl}/echo</a>

POST endpoint:
${baseUrl}/echo (send JSON data)</pre>`;
    
    // Send response as HTML with clickable links
    res.set('Content-Type', 'text/html');
    res.send(html);
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

// Current time endpoint
app.get('/time', (req, res) => {
    res.json({ time: new Date().toISOString() });
});

// Sample JSON data endpoint
app.get('/json', (req, res) => {
    res.json({ data: [{ id: 1, name: 'test' }] });
});

// Echo endpoint - GET shows instructions
app.get('/echo', (req, res) => {
    res.json({ message: 'Send POST to echo data' });
});

// Echo endpoint - POST returns sent data
app.post('/echo', (req, res) => {
    res.json({ echo: req.body });
});

// Handle all other routes - return 404
app.use('*', (req, res) => {
    res.status(404).json({ error: 'Not found' });
});

// Start server on port 3000
app.listen(3000);
