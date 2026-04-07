import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './components/App.tsx'
import NewComponent from './components/NewComponent.tsx'
import Counter from './components/Counter.tsx';
import UserForm from './components/UserForm.tsx'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
    <>
    <UserForm />
    <Counter/>
      <NewComponent />
      <App />
    </>
)
