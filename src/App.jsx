import './App.css'
import { Header, Footer } from './components'

function App() {
  const [page, setPage] = useState('Portfolio')

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
