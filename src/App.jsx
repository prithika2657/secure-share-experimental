//TEST123
import Login from "./pages/Login";
import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import Requests from "./pages/Requests";
import AuditLogs from "./pages/AuditLogs";
import AccessRequest from "./pages/AccessRequest.jsx";
import Signup from "./pages/Signup";
import { Navigate } from "react-router-dom";
import { auth } from "./firebase";
function RouteDebugger() {
  const location = useLocation();

  console.log("PATH:", location.pathname);

  return null;
}
export default function App() {
   console.log("APP LOADED");
  console.log("HASH:", window.location.hash);
 const [documents, setDocuments] = useState(() => {
  return JSON.parse(localStorage.getItem("documents")) || [];
});
 const [requests, setRequests] = useState(() => {
  return JSON.parse(localStorage.getItem("requests")) || [];
});
 const [logs, setLogs] = useState(() => {
  return JSON.parse(localStorage.getItem("logs")) || [];
});

  return (
    <HashRouter>
    <RouteDebugger />
      <div className="flex">
        <Sidebar />

        <div className="flex-1">
          
          <Routes>
             <Route
  path="/signup"
  element={<Signup />}
/>
<Route
  path="/login"
  element={<Login />}
/>
           <Route
  path="/"
  element={
    <Dashboard
      documents={documents}
      requests={requests}
    />
  }
/>

           <Route
  path="/upload"
  element={
    auth.currentUser ? (
      <Upload
        documents={documents}
        setDocuments={setDocuments}
        requests={requests}
        setRequests={setRequests}
        logs={logs}
        setLogs={setLogs}
      />
    ) : (
      <Navigate to="/login" />
    )
  }
/>

            <Route
  path="/requests"
  element={
    auth.currentUser ? (
      <Requests
        requests={requests}
        setRequests={setRequests}
        logs={logs}
        setLogs={setLogs}
      />
    ) : (
      <Navigate to="/login" />
    )
  }
/>
            <Route
              path="/access/:id"
              element={
              <AccessRequest
                documents={documents}
                requests={requests}
                setRequests={setRequests}
                logs={logs}
                setLogs={setLogs}
    />
  }
/>

            <Route
  path="/logs"
  element={
    auth.currentUser ? (
      <AuditLogs logs={logs} />
    ) : (
      <Navigate to="/login" />
    )
  }
/>
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}