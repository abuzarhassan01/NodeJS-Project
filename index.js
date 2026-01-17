const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", 'ejs');
app.set("views", path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



const PORT = process.env.PORT || 3000;





app.get("/", (req, res) => {
  res.render("index", {
    debug: "EJS render working",
    time: new Date().toISOString()
  });
});


// Contact form handler
app.post("/contact", (req, res) => {
    const { name, email, subject, message } = req.body;
    console.log('Contact form submission:', { name, email, subject, message });
    // Here you can add email sending logic or save to database
    res.json({ success: true, message: 'Message received!' });
});

app.use((req, res) => {
    console.log(req.url);
    res.status(404).send("404 page not found");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});