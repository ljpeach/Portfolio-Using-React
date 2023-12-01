// React
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// Pages
import App from './App.jsx'
import { AboutPage, ContactPage, ErrorPage, PortfolioPage, ResumePage } from './pages'

// Set up routes + their associated components.
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: < AboutPage />
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />
      },
      {
        path: 'contact',
        element: <ContactPage />
      },
      {
        path: 'resume',
        element: <ResumePage />
      }
    ]
  }
]);

// Render
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
