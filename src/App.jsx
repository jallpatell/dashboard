import { BrowserRouter, Routes, Route } from "react-router-dom"
import react, { useEffect } from "react"
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import './App.css'

function App() {


  return (
    <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4' style={{ zIndex: '1000'}}>
          <TooltipComponent content='settings' position='Top'>
            <button type="button" className="text-3xl">
              <FiSettings/>
            </button>
          </TooltipComponent>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
