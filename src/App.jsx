import { useState } from 'react'
import Search from './components/Search'
import Foodlist from './components/Foodlist';
import Nav from './components/Nav';
import "./App.css";
import Container from './components/Container';
import Innercontainer from './components/Innercontainer';
import Fooddetails from './components/Fooddetails';


function App() {
  const [foodData, setFooddata] = useState([]);
  const [foodId, setFoodId] = useState("");

  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFooddata={setFooddata}  />
      <Container>

      <Innercontainer>
      <Foodlist setFoodId={setFoodId} foodData={foodData} />
      </Innercontainer>

      <Innercontainer>
        <Fooddetails foodId={foodId} />
      </Innercontainer>
      
      </Container>
      
      
    

    
    
    </div>
  )
}

export default App
