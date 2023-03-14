
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routers from './Routers/Route/Route';

function App() {

  return (

    <div className=""> 

      <RouterProvider router={routers}>

      </RouterProvider>      
         
    </div>

  );

}

export default App;
