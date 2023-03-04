import Container from "./layout/Container/Container";
import El from "./library/El";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  const app = El({
    element: "div",
    child: [Navbar()],
  });
  return Container(app);
};

export default App;
