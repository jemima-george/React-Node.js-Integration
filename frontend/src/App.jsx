// axios is a http library that helps sending requests and sending data 
import axios from "axios"
import { useState, useEffect } from "react"

function App() {
  const [array, setArray] = useState([])

  // Use axios to fetch data 
  const fetchData = async () => {
    // Store response received from backend
    const response = await axios.get("http://localhost:8080/")
    setArray(response.data.blogPost)
  }

  // useEffect to run fetchData function when the app is loaded
  useEffect(()=>{
    fetchData()
  }, [])

  return (
    <main className="main-section">
      <h1 className="heading">Backend with Node.js and Frontend with React</h1>      
        {
          array.map((item, index) =>  (
            <ul className="list-container">
              <li key={index} className="list-item">
                <p className="title">{item.title}</p>
                <p className="content">{item.content}</p>
              </li>
            </ul>
          ))
        }
        
    </main>
  )
}

export default App
