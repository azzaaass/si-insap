import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IsAuth from "./services/IsAuth";
import AdminLayout from "./components/layouts/AdminLayout";
import Dashboard from "./pages/Dashboard";
import CheckRole from "./services/CheckRole";
import Stock from "./pages/Stock";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <IsAuth>
              <AdminLayout />
            </IsAuth>
          }
        >
          <Route
            index
            path="stock"
            element={
              <CheckRole roles={["staff", "admin"]}>
                <Stock />
              </CheckRole>
            }
          />
          <Route path="peminjaman" element={<div>fufu fafa</div>} />
          <Route path="status" />
        </Route>
      </Routes>
    </Router>
  );
}
