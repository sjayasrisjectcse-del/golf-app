"use client"
import { useEffect, useState } from "react"
import { supabase } from "../../lib/supabase"
import Navbar from "../components/Navbar"

export default function Dashboard() {

  // ✅ separate states
  const [score, setScore] = useState("")
  const [scores, setScores] = useState([])

  const user = typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("user") || "null")
    : null

  useEffect(() => {
    if (!user) {
      window.location.href = "/page.tsx"
    } else {
      loadScores()
    }
  }, [])

  const loadScores = async () => {
    let { data } = await supabase
      .from("scores")
      .select("*")
      .eq("user_id", user.id)
      .order("date", { ascending: false })

    setScores(data || [])
  }

  const addScore = async () => {
    if (!score) return alert("Enter score")

    await supabase.from("scores").insert([
      { user_id: user.id, score: parseInt(score), date: new Date() }
    ])

    setScore("")
    loadScores()
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #1f1c2c, #928dab)"
    }}>
      
      <Navbar />

      <div style={{
        maxWidth: "900px",
        margin: "auto",
        padding: "40px 20px",
        color: "white"
      }}>

        <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>
          Dashboard
        </h1>

        <p style={{ opacity: 0.7 }}>
          Track your golf scores and performance
        </p>

        {/* ADD SCORE */}
        <div style={{
          marginTop: "30px",
          padding: "25px",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(15px)"
        }}>
          <h3>Add New Score</h3>

          <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
            <input
              value={score}   // ✅ correct
              onChange={(e) => setScore(e.target.value)}
              placeholder="Enter score"
              style={{
                flex: 1,
                padding: "12px",
                borderRadius: "10px",
                border: "none"
              }}
            />

            <button onClick={addScore}>
              Add
            </button>
          </div>
        </div>

        {/* TOTAL */}
        <div style={{ marginTop: "30px" }}>
          <h3>Total Scores</h3>
          <h2>{scores.length}</h2>
        </div>

        {/* GRID */}
        <div style={{
          marginTop: "30px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
          gap: "15px"
        }}>
          {scores.map((s) => (
            <div key={s.id} style={{
              padding: "20px",
              borderRadius: "15px",
              textAlign: "center",
              background: "white",
              color: "black"
            }}>
              {s.score}
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}