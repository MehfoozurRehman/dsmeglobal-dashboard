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
import AddService from "./Screens/AddService";
import EditService from "./Screens/EditService";
import AddProject from "./Screens/AddProject";
import EditProject from "./Screens/EditProject";
import Category from "./Screens/Category";
import AddCategory from "./Screens/AddCategory";

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
  const [isAddCategory, setIsAddCategory] = useState(false);
  const [isAddWork, setIsAddWork] = useState(false);
  const [isEditWork, setIsEditWork] = useState(false);
  const [isAddService, setIsAddService] = useState(false);
  const [isEditService, setIsEditService] = useState(false);
  const [isAddProject, setIsAddProject] = useState(false);
  const [isEditProject, setIsEditProject] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [deleteConfirmationURL, setDeleteConfirmationURL] = useState("");
  const [deleteConfirmationId, setDeleteConfirmationId] = useState("");
  const [editWorkId, setEditWorkId] = useState("");
  const [editServiceId, setEditServiceId] = useState("");
  const [editProjectId, setEditProjectId] = useState("");

  return (
    <BrowserRouter>
      {isAddCategory ? <AddCategory closeOnClick={setIsAddCategory} /> : null}
      {isAddWork ? <AddWork closeOnClick={setIsAddWork} /> : null}
      {isEditWork ? (
        <EditWork closeOnClick={setIsEditWork} editId={editWorkId} />
      ) : null}
      {isAddService ? <AddService closeOnClick={setIsAddService} /> : null}
      {isEditService ? (
        <EditService closeOnClick={setIsEditService} editId={editServiceId} />
      ) : null}
      {isAddProject ? <AddProject closeOnClick={setIsAddProject} /> : null}
      {isEditProject ? (
        <EditProject closeOnClick={setIsEditProject} editId={editProjectId} />
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
                setIsAdd={setIsAddService}
                setIsEdit={setIsEditService}
                setEditId={setEditServiceId}
                isAdd={isAddService}
                isEdit={isEditService}
                deleteConfirmation={deleteConfirmation}
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
                setIsAdd={setIsAddProject}
                setIsEdit={setIsEditProject}
                setEditId={setEditProjectId}
                isAdd={isAddProject}
                isEdit={isEditProject}
                deleteConfirmation={deleteConfirmation}
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
                setIsAdd={setIsAddWork}
                setIsEdit={setIsEditWork}
                setEditId={setEditWorkId}
                isAdd={isAddWork}
                isEdit={isEditWork}
                deleteConfirmation={deleteConfirmation}
                setDeleteConfirmation={setDeleteConfirmation}
                setDeleteConfirmationURL={setDeleteConfirmationURL}
                setDeleteConfirmationId={setDeleteConfirmationId}
              />
            }
          />
          <Route
            path="category"
            element={
              <Category
                deleteConfirmation={deleteConfirmation}
                setDeleteConfirmation={setDeleteConfirmation}
                setDeleteConfirmationURL={setDeleteConfirmationURL}
                setDeleteConfirmationId={setDeleteConfirmationId}
                isAddCategory={isAddCategory}
                setIsAddCategory={setIsAddCategory}
              />
            }
          />
          <Route
            path="news-letter"
            element={
              <NewsLetter
                deleteConfirmation={deleteConfirmation}
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
                deleteConfirmation={deleteConfirmation}
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
