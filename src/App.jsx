import React, { lazy, Suspense, useLayoutEffect, useState } from "react";
import { WidgetLoader } from "react-cloudinary-upload-widget";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

import Loader from "./Components/Loader";

const AddVacancy = lazy(() => import("./Components/AddVacancy"));
const EditVacancies = lazy(() => import("./Components/EditVacancies"));
const EditCareersApplied = lazy(() =>
  import("./Components/EditCareersApplied")
);
const AddCareersApplied = lazy(() => import("./Components/AddCareersApplied"));
const AddTechonologies = lazy(() => import("./Components/AddTechonologies"));
const EditTechonologies = lazy(() => import("./Components/EditTechonologies"));
const AddBlog = lazy(() => import("./Components/AddBlog"));
const EditBlog = lazy(() => import("./Components/EditBlog"));
const AddCategory = lazy(() => import("./Components/AddCategory"));
const EditService = lazy(() => import("./Components/EditService"));
const AddProject = lazy(() => import("./Components/AddProject"));
const AddService = lazy(() => import("./Components/AddService"));
const EditProject = lazy(() => import("./Components/EditProject"));
const AddClient = lazy(() => import("./Components/AddClient"));
const EditClient = lazy(() => import("./Components/EditClient"));
const AddWork = lazy(() => import("./Components/AddWork"));
const DeleteConfirmation = lazy(() =>
  import("./Components/DeleteConfirmation")
);
const Sidebar = lazy(() => import("./Components/Sidebar"));
const Header = lazy(() => import("./Components/Header"));

const Work = lazy(() => import("./Screens/Work"));
const Contact = lazy(() => import("./Screens/Contact"));
const Quotes = lazy(() => import("./Screens/Quotes"));
const NewsLetter = lazy(() => import("./Screens/NewsLetter"));
const Projects = lazy(() => import("./Screens/Projects"));
const Services = lazy(() => import("./Screens/Services"));
const Category = lazy(() => import("./Screens/Category"));
const Client = lazy(() => import("./Screens/Client"));
const Login = lazy(() => import("./Screens/Login"));
const Blogs = lazy(() => import("./Screens/Blogs"));
const Vacancies = lazy(() => import("./Screens/Vacancies"));
const Techonologies = lazy(() => import("./Screens/Techonologies"));
const Dashboard = lazy(() => import("./Screens/Dashboard"));
const CareersApplications = lazy(() => import("./Screens/CareersApplications"));

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
  useLayoutEffect(() => {
    if (window.localStorage.getItem("user") === null) {
      navigate("/");
    }
  }, [window.location.pathname]);
  return (
    <Suspense fallback={<Loader height="100vh" />}>
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
          <Route
            path="quote"
            element={
              <Quotes
                deleteConfirmation={deleteConfirmation}
                setDeleteConfirmation={setDeleteConfirmation}
                setDeleteConfirmationURL={setDeleteConfirmationURL}
                setDeleteConfirmationId={setDeleteConfirmationId}
              />
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
