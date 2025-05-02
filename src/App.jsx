import './App.css'
import logo from './assets/logo.png'

function App() {

  return (
    <div className='container'>
      <div className='navigation'>
        <img src={logo} alt="" />
        <div className=''>
          <a href=""> 감성포스트 </a>
          <a href=""> 감성로또 </a>
        </div>
      </div>
    </div>
  )
}

export default App
