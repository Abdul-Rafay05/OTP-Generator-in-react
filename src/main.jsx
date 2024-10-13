import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import OTP from "./Component/OTP.jsx";
import PasswordGenerator from "./Component/passwordgenerator.jsx";
import CustomPassGenerator from "./Component/custompassgenerator.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <OTP mainHead="otp generator" /> */}
    {/* <PasswordGenerator /> */}
    <CustomPassGenerator />
  </StrictMode>
);
