import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Hero from "./components/Hero";



function App() {
  return (
    <BrowserRouter>
  
        <Routes>
        
          <Route exact path="" element={<Hero />} />
       
          <Route
            path="/*"
            element={
            
                <Routes>
               
          
           
                  <Route path="/Hero" element={<Hero />} />
                </Routes>
              
            }
          />
        </Routes>
    
    </BrowserRouter>
  )
}


export default App
