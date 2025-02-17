import React, { useState } from "react";
import Navbar from "./componenets/Navbar";
import Form from "./componenets/Form";
import ListGroup from "./componenets/ListGroup";
import { ResumeProvider } from "./context/ResumeContext";

const App = () => {






  return (
   <ResumeProvider>
   <Navbar/>
   <Form />
   <ListGroup />
   </ResumeProvider>
  );
};

export default App;
