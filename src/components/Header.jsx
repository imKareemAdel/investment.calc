import logo from '../assets/investment-Calculator-logo.png'
export default function Header(){
  return (
    <header id='header' >
       <img src={logo} alt="investment" />
        <h1>Investment Calculator </h1>
    </header>
  )   
}