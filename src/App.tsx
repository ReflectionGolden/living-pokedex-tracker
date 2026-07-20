import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [box, setBox] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const fetchBoxOne = async() => {
    try {
      setLoading(true);
      const res = await fetch('/netlify/functions/api/box1');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json()
      setBox(data)
    } catch (err) {
      console.error('Fetch error:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
    }
    finally {
      setLoading(false);
    }
  }
  
  //useEffect(() => {
  //  fetchBoxOne();
  //}, []);

  return (
    <>
      <h1>Personal Living Pokedex Tracker</h1>
      <button onClick={fetchBoxOne}>Call Box</button>
      <div className="card">
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {!loading && !error && 
        <p>
          Box 1: {box.length} entries loaded
        </p>}
      </div>
    </>
  )
}

export default App
