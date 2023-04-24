import React, { useState } from "react"

function ExampleReactComponent() {
  const [clickCount, setClickCount] = useState(0)

  return (
    <div className="bg-gradient-to-r from-cyan-300 to-stone-900 text-white p-4 rounded-md" onClick={() => setClickCount(prev => prev + 1)}>
      <h1 className="text-xl">Saudações do React + Wordpress!</h1>
      <p className="text-sm">
      Você clicou neste componente <span className="text-yellow-200 font-bold">{clickCount}</span> vezes.
      </p>
    </div>
  )
}

export default ExampleReactComponent
