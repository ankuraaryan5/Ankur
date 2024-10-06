import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing";
import Login from "./Components/Admin/Login";
import Dashboard from "./Components/Admin/Dashboard";
import ProjectForm from "./Components/Admin/ProjectForm";
import Blogger from "./Components/Admin/Blogger";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addProject" element={<ProjectForm />}/>
        <Route path="/blogger" element={<Blogger />}/>
      </Routes>
    </Router>
  );
}
export default App;