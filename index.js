const express = require ('express');
const cors = require ('cors')
require ('dotenv').config();
const studentRoute = require("./routes/studentRoute");


const app = express()


var corOptions = {
    origin:'http://localhost:3000'
}

app.use(cors(corOptions))

app.use(express.json())
app.use(studentRoute);
app.use(express.urlencoded({extended:true}))

// Handling error 404 (if no matching route found)
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    });
});

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is running on port:${PORT}`)
})
