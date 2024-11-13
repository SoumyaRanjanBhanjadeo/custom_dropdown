import './App.css'
import Dropdown from './components/Dropdown'

function App() {

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Custom Dropdown Menu</h1>
        <Dropdown />
      </div>
    </div>
  )
}

export default App
