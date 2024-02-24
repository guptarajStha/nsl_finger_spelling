
import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Page";


function App() {
  return (
    <BrowserRouter className="font-sans bg-[#edefaa] w-full h-full ">
      <Nav />
      {/* <div className="w-full h-[92vh]"> */}
      <div className="w-full h-[92vh]">
        <Pages />
      </div>
    </BrowserRouter>
  );
}

export default App;
