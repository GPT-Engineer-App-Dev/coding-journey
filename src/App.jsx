import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Courses from "./pages/Courses.jsx"; // Import the new Courses page

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/courses" element={<Courses />} /> {/* Add route for Courses page */}
      </Routes>
    </Router>
  );
}

export default App;
