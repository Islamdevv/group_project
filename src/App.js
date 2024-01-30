import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import ShoesTop from "./components/ShoesTop/ShoesTop";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <ShoesTop />
      <MainPage />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
