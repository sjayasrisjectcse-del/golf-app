"use client"
import { useState } from "react"
import { supabase } from "../../lib/supabase"
import Navbar from "../components/Navbar"

export default function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignup = async () => {
    let { error } = await supabase.from("users").insert([
      { email, password, role: "user" }
    ])

    if (!error) alert("Signup success")
    else alert(error.message)
  }

  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh"}}>
      <div style={{background:"white", color:"black", padding:"30px", borderRadius:"12px"}}>
        <Navbar />
        <h2>Signup</h2>

        <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <br/><br/>

        <input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)} />
        <br/><br/>

        <button onClick={handleSignup}>Signup</button>
      </div>
    </div>
  )
}