import React, { useState } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Dashboard from "./Screens/Dashboard.jsx";
import Login from "./Screens/Login.jsx";
import Work from "./Screens/Work.jsx";
import Contact from "./Screens/Contact.jsx";
import EditWork from "./Screens/EditWork.jsx";
import AddWork from "./Screens/AddWork.jsx";
import DeleteConfirmation from "./Screens/DeleteConfirmation";
import NewsLetter from "./Screens/NewsLetter";
import Projects from "./Screens/Projects";
import Services from "./Screens/Services";

function Main() {
  return (
    <>
      <Header />
      <div className="main">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

function App() {
  const [isAddWork, setIsAddWork] = useState(false);
  const [isEditWork, setIsEditWork] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [deleteConfirmationURL, setDeleteConfirmationURL] = useState("");
  const [deleteConfirmationId, setDeleteConfirmationId] = useState("");
  const [editWorkId, setEditWorkId] = useState("");
  return (
    <BrowserRouter>
      {isAddWork ? <AddWork closeOnClick={setIsAddWork} /> : null}
      {isEditWork ? (
        <EditWork closeOnClick={setIsEditWork} editWorkId={editWorkId} />
      ) : null}
      {deleteConfirmation ? (
        <DeleteConfirmation
          deleteConfirmationURL={deleteConfirmationURL}
          deleteConfirmationId={deleteConfirmationId}
        />
      ) : null}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Main />}>
          <Route path="" element={<Dashboard />} />
          <Route
            path="services"
            element={
              <Services
                setIsEditWork={setIsEditWork}
                setEditWorkId={setEditWorkId}
                setIsAddWork={setIsAddWork}
                setDeleteConfirmation={setDeleteConfirmation}
                setDeleteConfirmationURL={setDeleteConfirmationURL}
                setDeleteConfirmationId={setDeleteConfirmationId}
              />
            }
          />
          <Route
            path="projects"
            element={
              <Projects
                setIsEditWork={setIsEditWork}
                setEditWorkId={setEditWorkId}
                setIsAddWork={setIsAddWork}
                setDeleteConfirmation={setDeleteConfirmation}
                setDeleteConfirmationURL={setDeleteConfirmationURL}
                setDeleteConfirmationId={setDeleteConfirmationId}
              />
            }
          />
          <Route
            path="work"
            element={
              <Work
                setIsEditWork={setIsEditWork}
                setEditWorkId={setEditWorkId}
                setIsAddWork={setIsAddWork}
                setDeleteConfirmation={setDeleteConfirmation}
                setDeleteConfirmationURL={setDeleteConfirmationURL}
                setDeleteConfirmationId={setDeleteConfirmationId}
              />
            }
          />
          <Route
            path="news-letter"
            element={
              <NewsLetter
                setDeleteConfirmation={setDeleteConfirmation}
                setDeleteConfirmationURL={setDeleteConfirmationURL}
                setDeleteConfirmationId={setDeleteConfirmationId}
              />
            }
          />
          <Route
            path="contact"
            element={
              <Contact
                setDeleteConfirmation={setDeleteConfirmation}
                setDeleteConfirmationURL={setDeleteConfirmationURL}
                setDeleteConfirmationId={setDeleteConfirmationId}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
