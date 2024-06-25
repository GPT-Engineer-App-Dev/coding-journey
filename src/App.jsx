import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Courses from "./pages/Courses.jsx"; // Import the new Courses page
import CodeEditor from "./components/CodeEditor.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/courses" element={<Courses />} /> {/* Add route for Courses page */}
      <Route path="/code-editor" element={<CodeEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
