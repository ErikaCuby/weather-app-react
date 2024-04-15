import "./App.css";
import Search from "./Search.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
