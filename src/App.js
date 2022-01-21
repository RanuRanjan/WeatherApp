
import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {

  const [data,setData]=useState({});
  const [location,setLocation]=useState('')
   const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f517d68012012089caec37de6e4279f5`

   const searchLocation=(event)=>{
     if(event.key==="Enter"){
       axios.get(url).then((response)=>{
         setData(response.data)
         console.log(response.data);
       })
     }
   }


  return (
    <div className='App'>
     <div className='inputs'> <input type="text" value={location} onChange={event =>setLocation(event.target.value)} placeholder='Enter Location' onKeyPress={searchLocation}/></div>
         <div className='container'>
           <div className='Top'>
             <div className='Location'>
               <p>{data.name}</p>
             </div>
             <div className='temp'>
               {data.main ? <h1>{data.main.temp} F</h1> :null  }
               {/* console.log(h1); */}
             
             </div>
             <div className="description">
               {data.weather ? <p>{data.weather[0].main}</p> :null }
             </div>
             <div className='bottom'>
             <div className='feels'>
             {data.main ? <p className='bold'>{data.main.feels_like} F</p> :null  }
               <p>Feels Like</p>
              
             </div>
              <div className='humidity'>
              {data.main ? <p className='bold' >{data.main.humidity}</p> :null  }
                <p>Humidity</p>
              </div>
              <div className='wind'>

              {data.wind ? <p className='bold'>{data.wind.speed} MPH</p> :null  }
              <p>Wind Speed</p>
              </div>
           </div>
           </div>
           
         </div>
    </div>
  );
}

export default App;
