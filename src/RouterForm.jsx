import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login";

function RouterForm() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterForm;
