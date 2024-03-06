import { Route, Routes } from "react-router-dom";
import {Splash,Home} from './utility-components/imports';
import { Varient } from "./components/variant";
import { Report } from "./components/report";
import { Splash_1 } from "./components/splash_1";
import { BothReports } from "./components/graph";

function App() {
  return (
   <Routes>
<Route path="/" element={<Splash_1/>} />
<Route path="/s" element={<Splash/>} />
<Route path="/variantSelection" element={<Varient/>} />

<Route path="/Home" element={<Home/>} />

<Route path="/Report" element={<Report/>} />

<Route path="/BothReports" element={<BothReports/>} />


   </Routes>
  );
}

export default App;
