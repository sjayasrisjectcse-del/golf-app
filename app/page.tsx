"use client"


export default function Home() {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      textAlign: "center"
    }}>
      

      <h1 style={{fontSize:"40px"}}>🏌️ Golf Charity App</h1>

      <p style={{maxWidth:"500px"}}>
        Track your golf scores, participate in monthly draws,
        and support charities — all in one platform.
      </p>

      <div style={{marginTop:"20px"}}>
        <button onClick={()=>window.location.href="/login"}>
          Login
        </button>

        <button 
          style={{marginLeft:"10px"}}
          onClick={()=>window.location.href="/signup"}
        >
          Signup
        </button>
      </div>

    </div>
  )
}