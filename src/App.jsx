import Home from './pages/Home'
import Navbar from './pages/Navbar'

function App() {

  return (
    <div className='App'>
      <Navbar />
      <div className='content'>
        <Home />
      </div>
    </div>
  )
}

export default App
