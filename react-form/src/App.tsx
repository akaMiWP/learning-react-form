import { useState } from "react";
import Form from "./components/Form";
import Expense from "./components/Expense";

function App() {
  return (
    <div>
      <Form />
      <br></br>
      <Expense />
    </div>
  );
}

export default App;
