import "./App.css";

import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Works from "./components/Works/Works";

function App() {
  return (
    <div className="container__App">
      <Header />
      <Profile />
      <Works />
    </div>
  );
}

export default App;
