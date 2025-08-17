function Stop() {
  return (
    <div 
      style={{
        width: "100px",
        height: "100px",
        background: "#d32f2f",
        border: "6px solid white",
        clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <span 
        style={{
          color: "white",
          fontSize: "48px",
          fontWeight: "bold",
          lineHeight: 1
        }}
      >
        ×
      </span>
    </div>
  )
}

export default Stop
