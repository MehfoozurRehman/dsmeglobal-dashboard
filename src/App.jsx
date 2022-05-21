import React, { useEffect, useState } from "react";
import { WidgetLoader } from "react-cloudinary-upload-widget";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import DeleteConfirmation from "./Screens/DeleteConfirmation";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Screens/Dashboard.jsx";
import Login from "./Screens/Login.jsx";
import Work from "./Screens/Work.jsx";
import Contact from "./Screens/Contact.jsx";
import EditWork from "./Screens/EditWork.jsx";
import AddWork from "./Screens/AddWork.jsx";
import NewsLetter from "./Screens/NewsLetter";
import Projects from "./Screens/Projects";
import Services from "./Screens/Services";
import AddService from "./Screens/AddService";
import EditService from "./Screens/EditService";
import AddProject from "./Screens/AddProject";
import EditProject from "./Screens/EditProject";
import Category from "./Screens/Category";
import AddCategory from "./Screens/AddCategory";
import Client from "./Screens/Client";
import AddClient from "./Screens/AddClient";
import EditClient from "./Screens/EditClient";
import Blogs from "./Screens/Blogs";
import EditBlog from "./Screens/EditBlog";
import AddBlog from "./Screens/AddBlog";
import Techonologies from "./Screens/Techonologies";
import AddTechonologies from "./Screens/AddTechonologies";
import EditTechonologies from "./Screens/EditTechonologies";
import CareersApplications from "./Screens/CareersApplications";
import EditCareersApplied from "./Screens/EditCareersApplied";
import AddCareersApplied from "./Screens/AddCareersApplied";
import Vacancies from "./Screens/Vacancies";
import AddVacancy from "./Screens/AddVacancy";
import EditVacancies from "./Screens/EditVacancies";

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
  axios.defaults.headers.common["Bypass-Tunnel-Reminder"] = true;
  const navigate = useNavigate();
  const [isAddCategory, setIsAddCategory] = useState(false);
  const [isAddWork, setIsAddWork] = useState(false);
  const [isEditWork, setIsEditWork] = useState(false);
  const [isAddService, setIsAddService] = useState(false);
  const [isEditService, setIsEditService] = useState(false);
  const [isAddProject, setIsAddProject] = useState(false);
  const [isEditProject, setIsEditProject] = useState(false);
  const [isAddBlog, setIsAddBlog] = useState(false);
  const [isEditBlog, setIsEditBlog] = useState(false);
  const [isAddVacancy, setIsAddVacancy] = useState(false);
  const [isEditVacancies, setIsEditVacancies] = useState(false);
  const [isAddCareersApplied, setIsAddCareersApplied] = useState(false);
  const [isEditCareersApplied, setIsEditCareersApplied] = useState(false);
  const [isAddClient, setIsAddClient] = useState(false);
  const [isEditClient, setIsEditClient] = useState(false);
  const [isAddTechonologies, setIsAddTechonologies] = useState(false);
  const [isEditTechonologies, setIsEditTechonologies] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [deleteConfirmationURL, setDeleteConfirmationURL] = useState("");
  const [deleteConfirmationId, setDeleteConfirmationId] = useState("");
  const [editWorkId, setEditWorkId] = useState("");
  const [editServiceId, setEditServiceId] = useState("");
  const [editProjectId, setEditProjectId] = useState("");
  const [editClientId, setEditClientId] = useState("");
  const [editTechonologiesId, setEditTechonologiesId] = useState("");
  const [editBlogId, setEditBlogId] = useState("");
  const [editCareersAppliedId, setEditCareersAppliedId] = useState("");
  const [editVacanciesId, setEditVacanciesId] = useState("");
  useEffect(() => {
    if (window.localStorage.getItem("user") === null) {
      navigate("/");
    }
  }, [window.location.pathname]);
  return (
    <>
      {isAddCategory ? <AddCategory closeOnClick={setIsAddCategory} /> : null}
      {isAddClient ? <AddClient closeOnClick={setIsAddClient} /> : null}
      {isEditClient ? (
        <EditClient closeOnClick={setIsEditClient} editId={editClientId} />
      ) : null}
      {isAddTechonologies ? (
        <AddTechonologies closeOnClick={setIsAddTechonologies} />
      ) : null}
      {isEditTechonologies ? (
        <EditTechonologies
          closeOnClick={setIsEditTechonologies}
          editId={editTechonologiesId}
        />
      ) : null}
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
      {isAddBlog ? <AddBlog closeOnClick={setIsAddBlog} /> : null}
      {isEditBlog ? (
        <EditBlog closeOnClick={setIsEditBlog} editId={editBlogId} />
      ) : null}
      {isAddVacancy ? <AddVacancy closeOnClick={setIsAddVacancy} /> : null}
      {isEditVacancies ? (
        <EditVacancies
          closeOnClick={setIsEditVacancies}
          editId={editVacanciesId}
        />
      ) : null}
      {isAddCareersApplied ? (
        <AddCareersApplied closeOnClick={setIsAddCareersApplied} />
      ) : null}
      {isEditCareersApplied ? (
        <EditCareersApplied
          closeOnClick={setIsEditCareersApplied}
          editId={editCareersAppliedId}
        />
      ) : null}
      {deleteConfirmation ? (
        <DeleteConfirmation
          deleteConfirmationURL={deleteConfirmationURL}
          deleteConfirmationId={deleteConfirmationId}
        />
      ) : null}
      <WidgetLoader />

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
            path="client"
            element={
              <Client
                deleteConfirmation={deleteConfirmation}
                setDeleteConfirmation={setDeleteConfirmation}
                setDeleteConfirmationURL={setDeleteConfirmationURL}
                setDeleteConfirmationId={setDeleteConfirmationId}
                isAddClient={isAddClient}
                setIsAddClient={setIsAddClient}
                isEditClient={isEditClient}
                setIsEditClient={setIsEditClient}
                setEditClientId={setEditClientId}
              />
            }
          />
          <Route
            path="blogs"
            element={
              <Blogs
                isAdd={isAddBlog}
                setIsAdd={setIsAddBlog}
                isEdit={isEditBlog}
                setIsEdit={setIsEditBlog}
                setEditId={setEditBlogId}
              />
            }
          />
          <Route
            path="techonologies"
            element={
              <Techonologies
                isAdd={isAddTechonologies}
                setIsAdd={setIsAddTechonologies}
                isEdit={isEditTechonologies}
                setIsEdit={setIsEditTechonologies}
                setEditId={setEditTechonologiesId}
              />
            }
          />
          <Route
            path="vacancies"
            element={
              <Vacancies
                isAdd={isAddVacancy}
                setIsAdd={setIsAddVacancy}
                isEdit={isEditVacancies}
                setIsEdit={setIsEditVacancies}
                setEditId={setEditVacanciesId}
              />
            }
          />
          <Route
            path="applied"
            element={
              <CareersApplications
                isAdd={isAddCareersApplied}
                setIsAdd={setIsAddCareersApplied}
                isEdit={isEditCareersApplied}
                setIsEdit={setIsEditCareersApplied}
                setEditId={setEditCareersAppliedId}
              />
            }
          />
          <Route
            path="category"
            element={
              <Category
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
    </>
  );
}

export default App;
