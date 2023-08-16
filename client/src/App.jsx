import "@/assets/style/main.css";
import "@/assets/style/imports/funky.css";
import Nav from "./component/Nav";
import About from "./component/slider/About";
import Landing from "./component/LandPage/Landing";
function App() {
  return (
    <main className=" mx-auto">
      <Nav />
      <About />
      <Landing />
    </main>
  );
}
export default App;
