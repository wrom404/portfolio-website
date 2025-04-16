import { BrowserRouter as Router, Routes, Route } from "react-router";
import Page from "../pages/page";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
