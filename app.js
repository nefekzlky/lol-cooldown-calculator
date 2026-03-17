const express = require('express');
const path = require('path');
const i18n = require('i18n');

const app = express();

// Use dynamic port for production (e.g., Render) or 3000 for local development
const PORT = process.env.PORT || 3000;

// i18n (Internationalization) Configuration
i18n.configure({
    locales: ['tr', 'en'],
    directory: path.join(__dirname, 'locales'),
    defaultLocale: 'tr',
    queryParameter: 'lang',
    autoReload: true
});

// Template Engine Setup
app.set('view engine', 'ejs');
app.set('views', './views');

// Essential Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(i18n.init);

// Routes
const championRoutes = require('./routes/championRoutes');
app.use('/', championRoutes);

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}...`);
    });
}

module.exports = app;