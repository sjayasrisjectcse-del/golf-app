"use client"

export default function Navbar() {

  const logout = () => {
    localStorage.removeItem("user")
    window.location.href = "/login"
  }

  return (
    <div style={{
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      padding:"15px 30px",
      background:"rgba(0,0,0,0.6)",
      color:"white"
    }}>
      <h2>🏌️ Golf App</h2>

      <div>
        <button onClick={()=>window.location.href="/dashboard"}>Dashboard</button>
        <button onClick={()=>window.location.href="/login"} style={{marginLeft:"10px"}}>Login</button>
        <button onClick={()=>window.location.href="/signup"} style={{marginLeft:"10px"}}>Signup</button>
        <button onClick={logout} style={{marginLeft:"10px", background:"red"}}>Logout</button>
      </div>
    </div>
  )
}