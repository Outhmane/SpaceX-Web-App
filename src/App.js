import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage, Error, Capsules, Cores, Crew, SingleCrew, Launches, SingleLaunches } from "./pages";
import { Header } from "./components";



function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/capsules" element={<Capsules />}></Route>
        <Route path="/cores" element={<Cores />}></Route>
        <Route path="/crew" element={<Crew />}></Route>
        <Route path="/crew/:id" element={<SingleCrew />}></Route>
        <Route path="/launches" element={<Launches />}></Route>
        <Route path="/launches/:id" element={<SingleLaunches />}></Route>
        <Route path="*" element={<Error />}></Route>
        
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
