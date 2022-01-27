import React, { useState } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Dashboard from "./Screens/Dashboard.jsx";
import Login from "./Screens/Login.jsx";
import Investor from "./Screens/Investor.jsx";
import Startup from "./Screens/Startup.jsx";
import StartupDetails from "./Screens/StartupDetails.jsx";
import Client from "./Screens/Client.jsx";
import FAQ from "./Screens/FAQ.jsx";
import Contact from "./Screens/Contact.jsx";
import Milestones from "./Screens/Milestones.jsx";
import AddQuestion from "./Screens/AddQuestion.jsx";
import EditMilestone from "./Screens/EditMilestone.jsx";
import EditClient from "./Screens/EditClient.jsx";
import AddClient from "./Screens/AddClient.jsx";
import EditQuestion from "./Screens/EditQuestion.jsx";
import EditInvestor from "./Screens/EditInvestor.jsx";
import AddInvestor from "./Screens/AddInvestor.jsx";
import AddStartup from "./Screens/AddStartup.jsx";
import EditStartup from "./Screens/EditStartup.jsx";
import AddMilestone from "./Screens/AddMilestone.jsx";

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
  const [isEditClient, setIsEditClient] = useState(false);
  const [isAddClient, setIsAddClient] = useState(false);
  const [isEditInvestor, setIsEditInvestor] = useState(false);
  const [isAddInvestor, setIsAddInvestor] = useState(false);
  const [isAddStartup, setIsAddStartup] = useState(false);
  const [isEditStartup, setIsEditStartup] = useState(false);
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
      {isEditClient ? <EditClient closeOnClick={setIsEditClient} /> : null}
      {isAddClient ? <AddClient closeOnClick={setIsAddClient} /> : null}
      {isEditInvestor ? (
        <EditInvestor closeOnClick={setIsEditInvestor} />
      ) : null}
      {isAddInvestor ? <AddInvestor closeOnClick={setIsAddInvestor} /> : null}
      {isAddStartup ? <AddStartup closeOnClick={setIsAddStartup} /> : null}
      {isEditStartup ? <EditStartup closeOnClick={setIsEditStartup} /> : null}
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
            path="client"
            element={
              <Client
                setIsEditClient={setIsEditClient}
                setIsAddClient={setIsAddClient}
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
          <Route path="contact" element={<Contact />} />
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
