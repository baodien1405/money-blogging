import { onAuthStateChanged } from 'firebase/auth'
import { auth } from 'firebaseApp/firebase-config'
import { useEffect, useState } from 'react'
import { createContext, useContext } from 'react'

const AuthContext = createContext()

function AuthProvider({ children }) {
  const [userInfo, setUserInfo] = useState({})
  const value = { userInfo, setUserInfo }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserInfo(user)
    })
  }, [])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

function useAuth() {
  const context = useContext(AuthContext)
  if (typeof context === 'undefined') throw new Error('useAuth must be used within AuthProvider')
  return context
}

export { AuthProvider, useAuth }
