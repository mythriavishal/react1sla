const BoxModel = ({ num }) => {
  return (
    <div style={{ backgroundColor: "white", color: "black" }}>
      <p>This is a box model.</p>
      <p style={{ backgroundColor: "green", color: "yellow" }}>
        {num}
      </p>
    </div>
  )
}

export default BoxModel