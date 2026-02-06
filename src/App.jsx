//import './App.css'
import {HeaderComponents} from "./components/HeaderComponents"; 
import {Homecomponents} from "./components/Homecomponents"
import { MapDemo1 } from "./components/MapDemo1 ";
import { MapDemo2 } from "./components/MapDemo2";
import {MapDemo3} from "./components/MapDemo3";
import {MapDemo4} from "./components/MapDemo4";
import {MapDemo5} from "./components/MapDemo5";
import {Routes,Route} from"react-router-dom";

function App() {
  return (
      <div>
          <HeaderComponents/>
          <Homecomponents/>
          <MapDemo1/>
          <MapDemo2/>
          <MapDemo3/>
          <MapDemo4/>
          <MapDemo5/>
          
          

      </div>

  );
}

export default App;
