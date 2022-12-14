import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './contexts/auth-context'
import SignInPage from 'pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import HomePage from 'pages/HomePage'
import NotFoundPage from 'pages/NotFoundPage'

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
