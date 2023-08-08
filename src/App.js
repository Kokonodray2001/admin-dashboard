import "./App.css";
import DashBoardPage from "./components/DashBoardPage/DashBoardPage";
import RecentOrdersPage from "./components/RecentOrderPage/RecentOrdersPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<DashBoardPage />} />
          <Route path="/viewAll" element={<RecentOrdersPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
