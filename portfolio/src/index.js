import React from "react"
import reactDom from "react-dom"

function MyInfo() {
  return (
    <div>
      <h1>Archie Beales</h1>
      <p>I'm british lol</p>
      <uo>
        <li>The states</li>
        <li>Japan</li>
        <li>ye mum's house</li>
      </uo>
    </div>
  )
}

reactDom.render(<MyInfo />, document.getElementById("root"))
