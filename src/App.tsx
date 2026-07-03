import { useEffect, useState } from 'react'
import { db } from '../db/index.ts'
import './App.css'

function App() {
  const [box, setBox] = useState([]);
  
  const fetchBoxOne = async() => {
    try {
      const res = await db.execute('SELECT * FROM pokedex LIMIT 30');
      setBox(res.data);
      console.log(box);
    } catch (err) {
      console.log(err);
    }
  }
  
  useEffect(() => {
    fetchBoxOne();
  }, []);

  return (
    <>
      <h1>Personal Living Pokedex Tracker</h1>
      <div className="card">
        <p>
          Box 1: (NYI)
        </p>
      </div>
    </>
  )
}

export default App
