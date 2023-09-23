import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./components/auth/Login";
import SignIn from "./components/auth/Signin";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/store" element={<Store />} />
            <Route path="/store/:id" element={<StoreDetail />} />
            <Route path="/store/settings/:id" element={<StoreSettings />} />
            <Route path="/offer/list/:id" element={<OfferList />} />
            <Route path="/offer/list/edit/:id" element={<EditOffer />} />
            <Route path="/offer/:id" element={<OfferDetails />} />
          </Route> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignIn />} />
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
