import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Logo from "./img.png";
import Writer from "./writer.png";
import linguist from "./linguist.png";
const App = () => {
  const name = "Omoboyede Iyanuoluwa Dorcas";
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={
            <Home name={name} logo={Logo} writer={Writer} linguist={linguist} />
          }
        />
        <Route
          path="about"
          element={<About logo={Logo} writer={Writer} linguist={linguist} />}
        />
        <Route path="contact-me" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
