import Card from "./components/Card"
import './app.css'
import CardEnd from "./components/CardEnd"
import { useState } from "react"
import { SiteContext } from "./Context"
function App() {
  const [select, setSelect] = useState(0)

  const data = { setSelect, select }

  return (
    <>
      <SiteContext.Provider value={data}>
        <div className="App">
          {select === 0 && <Card /> || select !== 0 && <CardEnd />}
        </div>
      </SiteContext.Provider>
    </>
  )
}

export default App
