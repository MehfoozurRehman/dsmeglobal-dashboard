import React, { useState } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Dashboard from "./Screens/Dashboard.jsx";
import Login from "./Screens/Login.jsx";
import Investor from "./Screens/Investor.jsx";
import Startup from "./Screens/Startup.jsx";
import StartupDetails from "./Screens/StartupDetails.jsx";
import Work from "./Screens/Work.jsx";
import FAQ from "./Screens/FAQ.jsx";
import Contact from "./Screens/Contact.jsx";
import Milestones from "./Screens/Milestones.jsx";
import AddQuestion from "./Screens/AddQuestion.jsx";
import EditMilestone from "./Screens/EditMilestone.jsx";
import EditWork from "./Screens/EditWork.jsx";
import AddWork from "./Screens/AddWork.jsx";
import EditQuestion from "./Screens/EditQuestion.jsx";
import EditInvestor from "./Screens/EditInvestor.jsx";
import AddInvestor from "./Screens/AddInvestor.jsx";
import AddStartup from "./Screens/AddStartup.jsx";
import EditStartup from "./Screens/EditStartup.jsx";
import AddMilestone from "./Screens/AddMilestone.jsx";
import DeleteConfirmation from "./Screens/DeleteConfirmation";
import NewsLetter from "./Screens/NewsLetter";

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
  const [isAddQuestion, setIsAddQuestion] = useState(false);
  const [isEditQuestion, setIsEditQuestion] = useState(false);
  const [isEditMilestone, setIsEditMilestone] = useState(false);
  const [isAddMilestone, setIsAddMilestone] = useState(false);
  const [isEditWork, setIsEditWork] = useState(false);
  const [isAddWork, setIsAddWork] = useState(false);
  const [isEditInvestor, setIsEditInvestor] = useState(false);
  const [isAddInvestor, setIsAddInvestor] = useState(false);
  const [isAddStartup, setIsAddStartup] = useState(false);
  const [isEditStartup, setIsEditStartup] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [deleteConfirmationURL, setDeleteConfirmationURL] = useState("");
  const [deleteConfirmationId, setDeleteConfirmationId] = useState("");
  const [editWorkId, setEditWorkId] = useState("");
  return (
    <BrowserRouter>
      {isAddQuestion ? <AddQuestion closeOnClick={setIsAddQuestion} /> : null}
      {isEditQuestion ? (
        <EditQuestion closeOnClick={setIsEditQuestion} />
      ) : null}
      {isAddMilestone ? (
        <AddMilestone closeOnClick={setIsAddMilestone} />
      ) : null}
      {isEditMilestone ? (
        <EditMilestone closeOnClick={setIsEditMilestone} />
      ) : null}
      {isEditWork ? (
        <EditWork closeOnClick={setIsEditWork} editWorkId={editWorkId} />
      ) : null}
      {isAddWork ? <AddWork closeOnClick={setIsAddWork} /> : null}
      {isEditInvestor ? (
        <EditInvestor closeOnClick={setIsEditInvestor} />
      ) : null}
      {isAddInvestor ? <AddInvestor closeOnClick={setIsAddInvestor} /> : null}
      {isAddStartup ? <AddStartup closeOnClick={setIsAddStartup} /> : null}
      {isEditStartup ? <EditStartup closeOnClick={setIsEditStartup} /> : null}
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
            path="investor"
            element={
              <Investor
                setIsAddInvestor={setIsAddInvestor}
                setIsEditInvestor={setIsEditInvestor}
              />
            }
          />
          <Route
            path="startup"
            element={
              <Startup
                setIsAddStartup={setIsAddStartup}
                setIsEditStartup={setIsEditStartup}
              />
            }
          />
          <Route path="startup-details" element={<StartupDetails />} />
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
            path="faq"
            element={
              <FAQ
                setIsAddQuestion={setIsAddQuestion}
                setIsEditQuestion={setIsEditQuestion}
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
            path="milestones"
            element={
              <Milestones
                setIsEditMilestone={setIsEditMilestone}
                setIsAddMilestone={setIsAddMilestone}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
