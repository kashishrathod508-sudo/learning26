import {Navbar} from "./components/Navbar";
import {HeaderComponents} from "./components/HeaderComponents";
import {Homecomponents} from "./components/Homecomponents";
import { MapDemo1 } from "./components/MapDemo1";
import { MapDemo2 } from "./components/MapDemo2";
import { MapDemo3 } from "./components/MapDemo3";
import { MapDemo4 } from "./components/MapDemo4";
import { MapDemo5 } from "./components/MapDemo5";
import { Routes, Route } from "react-router-dom";
import { NetflixHome } from  "./components/NetflixHome";
import { NetflixMovies } from "./components/NetflixMovies";
import {NetflixShows } from"./components/NetflixShows";
import { UseStateDemo1 } from"./components/UseStateDemo1";
import { FunctionDemo1 } from "./components/FunctionDemo1";
import {UseStateDemo2} from"./components/UseStateDemo2";
import {UseStateDemo3} from"./components/UseStateDemo3";
import { Watch } from "./components/Watch";
import { ErrorNotFound} from "./components/ErrorNotFound";
import { Employees } from "./components/Employees";
import { FormDemo1 } from "./components/form/FormDemo1";
import { FormDemo2} from "./components/form/FormDemo2";
import { FormDemo3} from "./components/form/FormDemo3";
import { Formvalidation1 } from "./components/form/Formvalidation1";
import { Formvalidation2 } from "./components/form/Formvalidation2";
import { Formvalidation3 } from "./components/form/Formvalidation3";
import { ApiDemo1 } from "./components/form/api/ApiDemo1";
import { ApiDemo2}  from"./components/form/api/ApiDemo2";
import { ApiDemo3 } from "./components/form/api/ApiDemo3";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/NetflixHome" element={<NetflixHome/>}></Route>
        <Route path="/NetflixMovies" element={<NetflixMovies/>}></Route>
        <Route path="/NetflixShows" element={<NetflixShows/>}></Route>
        <Route path="/UseStateDemo1" element={<UseStateDemo1/>}></Route>
        <Route path="/FunctionDemo1" element={<FunctionDemo1/>}></Route>
        <Route path="/UseStateDemo2" element={<UseStateDemo2/>}></Route>
        <Route path="/UseStateDemo3" element={<UseStateDemo3/>}></Route>
        <Route path="/Watch/:name" element={<Watch/>}></Route>
        <Route path="/*" element = {<ErrorNotFound/>}></Route>
        <Route path="/formdemo1" element = {<FormDemo1/>}></Route>
        <Route path="/formdemo2" element = {<FormDemo2/>}></Route>
        <Route path="/formdemo3" element = {<FormDemo3/>}></Route>
        <Route path="/Employees" element={<Employees/>}></Route>
        <Route path="/formvalidation1" element={<Formvalidation1/>}></Route>
        <Route path="/formvalidation2" element={<Formvalidation2/>}></Route>
        <Route path="/formvalidation3" element={<Formvalidation3/>}></Route>
        <Route path="/apidemo1" element={<ApiDemo1/>}></Route>
        <Route path="/apidemo2" element={<ApiDemo2/>}></Route>
        <Route path="/apidemo3" element={<ApiDemo3/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
