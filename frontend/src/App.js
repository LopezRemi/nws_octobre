import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Materials from './pages/Materials'
import  Table  from './Components/Table'


function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Table />} />
            <Route path='/materials' element={<Materials />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;
