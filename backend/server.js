// Can use import instead of require npm package by changing type in package.json file to module
import express from "express"
import cors from "cors"

// cors is a bridge between frontend and backend
const corsOptions = {
    origin: ["http://localhost:5173/"]
}

app.use(cors(corsOptions))

const app = express();

app.listen(8080, () => {
    console.log("Server started on port 8080")
})