import './App.css'
import { 
  GeneralInfo, 
  EducationalInfo, 
  PracticalInfo 
} from './InfoForms'

function App() {
  return (
    <div className='appContainer'>
      <h1>odin-cv</h1>
      <GeneralInfo></GeneralInfo>
      <EducationalInfo></EducationalInfo>
      <PracticalInfo></PracticalInfo>
    </div>
  )
}

export default App
