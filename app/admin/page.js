import Navbar from "../components/Navbar"
"use client"


export default function Admin() {

  const runDraw = () => {
    let random = Math.floor(Math.random() * 45) + 1
    alert("Draw number: " + random)
  }

  return (
    <div style={{textAlign:"center", marginTop:"100px"}}>
      <Navbar />
      <h2>Admin Panel</h2>

      <button onClick={runDraw}>Run Draw 🎯</button>
    </div>
  )
}