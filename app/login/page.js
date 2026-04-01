"use client"
import { useState } from "react"
import { supabase } from "../../lib/supabase"
import Navbar from "../components/Navbar"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    let { data } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .eq("password", password)

    if (data.length > 0) {
      localStorage.setItem("user", JSON.stringify(data[0]))

      if (data[0].role?.trim().toLowerCase() === "admin") {
        window.location.href = "/admin"
      } else {
        window.location.href = "/dashboard"
      }
    } else {
      alert("Invalid login")
    }
  }

  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh"}}>
      <div style={{background:"white", color:"black", padding:"30px", borderRadius:"12px"}}>
        <h2>Login</h2>

        <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <br/><br/>

        <input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)} />
        <br/><br/>

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}