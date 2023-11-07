import Navbar from "./Components/MyNav.jsx";
import Footer from "./Components/MyFooter.jsx";
import Welcome from "./Components/Welcome.jsx";
import AllTheBooks from "./Components/AllTheBooks.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Welcome />
      <AllTheBooks />
      <hr></hr>
      <Footer />
    </>
  );
}

export default App;
