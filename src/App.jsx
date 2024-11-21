import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IsAuth from "./services/IsAuth";
import AdminLayout from "./components/layouts/AdminLayout";
import Dashboard from "./pages/Dashboard";
import CheckRole from "./services/CheckRole";
import Stock from "./pages/Stock";
import Peminjaman from "./pages/Peminjaman";
import Status from "./pages/Status";
import StatusDetail from "./pages/StatusDetail";
import StatusKembalikan from "./pages/StatusKembalikan";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Paernt */}
        <Route
          path="/"
          element={
            <IsAuth>
              <AdminLayout />
            </IsAuth>
          }
        >
          {/* Child */}
          <Route
            index
            path="stock"
            element={
              <CheckRole roles={["staff", "admin"]}>
                <Stock />
              </CheckRole>
            }
          />
          {/* Child */}
          <Route
            path="peminjaman"
            element={
              <CheckRole roles={["staff", "admin"]}>
                <Peminjaman />
              </CheckRole>
            }
          />
          {/* Child */}
          <Route
            path="status"
            element={
              <CheckRole roles={["staff", "admin"]}>
                <Status/>
              </CheckRole>
            }
          />
          {/* Child */}
          <Route
            path="status/:id"
            element={
              <CheckRole roles={["staff", "admin"]}>
                <StatusDetail/>
              </CheckRole>
            }
          />
          {/* Child */}
          <Route
            path="status/:id/kembalikan"
            element={
              <CheckRole roles={["staff", "admin"]}>
                <StatusKembalikan/>
              </CheckRole>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}
