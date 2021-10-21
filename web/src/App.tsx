import { useContext } from 'react'
import style from './App.module.scss'
import { LoginBox } from './components/LoginBox'
import { MessageList } from './components/MessageList'
import { SendMessageForm } from './components/SendMessageForm'
import { AuthContext } from './contexts/auth'

function App() {
  const { user } = useContext(AuthContext) 

  return (
    <main className={`${style.contentWrapper} ${!! user ? style.contentSigned : ''}`}>
      <MessageList />
      { !!user ? <SendMessageForm /> : <LoginBox /> }
    </main>
  )
}

export {App}
