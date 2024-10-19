import Title from './ComponetsTitle/Title'
import Image from './ComponentsImagen/Image'
import Details from './ComponentsDtealis/Details'
import './App.css'

function App() {
    return (
    <div>
      <Title
        title={'Rick Sanchez'}
      />
      <Image img='./rick.jpg.jpg'
      />
      <Details
        genre={'Masculino'} 
        status={'Vivo'} 
      />
    </div>
  )
}

export default App
