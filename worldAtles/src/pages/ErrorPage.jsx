import { useRouteError } from "react-router-dom"

export const ErrorPage = ()=>{


    const error= useRouteError()
    console.log(error)
    return(
        <>
       <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "80vh",
        padding: "0 10%",
        margin: "0 auto",
        backgroundImage:
          "url('https://www.lego.com/_next/static/images/bg-emmet-9acc805a979227a673c2419dcf9faf0e.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff", // Text and button color adjusted for better visibility
      }}
    >
      {/* Left Side: LEGO Image */}
      <div>
        <img
          src="https://www.lego.com/_next/static/images/emmet-346028b3b34aaad64f69c1158744e518.png"
          alt="LEGO Emmet"
          style={{
            maxWidth: '100%',
            height: "auto",
            maxHeight: "80vh",
          }}
        />
      </div>

      {/* Right Side: Go Home Button */}
      <div>
        <button
          onClick={() => (window.location.href = "/")}
          style={{
            padding: "15px 30px",
            fontSize: "18px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          Go Home
        </button>
      </div>
    </div>
        </>
    )

  

}