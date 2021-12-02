import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import FormRegister from './components/FormRegister'
// import FormModal from './components/FormModal'
import './App.css'
function App() {
  // const [data, setData] = useState([])

  // const onSaveData = (user) => {
  //   setData((prev) => {
  //     return [user, ...prev]
  //   })
  // }

  return (
    <div className="App">
      <FormRegister />
      {/* <FormModal data={data} /> */}
    </div>
  )
}

export default App
