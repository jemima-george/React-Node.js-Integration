// Can use import instead of require npm package by changing type in package.json file to module
import express from "express"
import cors from "cors"

const app = express();

// cors is a bridge between frontend and backend
const corsOptions = {
    origin: ["http://localhost:5173"]
}

app.use(cors(corsOptions))

app.get('/', (req,res) =>{
    res.json({
        blogPost:[
            {
                title: "Journey to the end of the Earth",
                content: "An exploration to discover the mysteries of the end of the Earth. "
            }, 
            {
                title: "Understanding the Universe: A Guide",
                content: "A simple explanation of the vastness and wonders of the universe"
            }
        ]
    })
})

app.listen(8080, () => {
    console.log("Server started on port 8080")
})