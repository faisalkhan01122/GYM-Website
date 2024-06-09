import "./App.css";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero-Scetion/Hero";
import Join from "./Components/Join/Join";
import Plans from "./Components/Plans/Plans";
import { Programs } from "./Components/Programs/Programs";
import Reason from "./Components/Reason/Reason";
import Testimonails from "./Components/Testimonails/Testimonails";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reason />
      <Plans />
      <Testimonails />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
