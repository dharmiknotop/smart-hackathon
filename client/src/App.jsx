import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./components/auth/Login";
import SignIn from "./components/auth/Signin";
import Layout from "./components/shared/Layout";
import Home from "./components/Home";
import LayoutForWorker from "./components/shared/LayoutForWorker";
import WorkerDashboard from "./components/dashboard/WorkerDashboard";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>

          <Route path="/worker" element={<LayoutForWorker />}>
            <Route path="/worker/dashboard" element={<WorkerDashboard />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignIn />} />
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
