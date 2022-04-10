import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import AuthService from "./sevice/auth_service";
import ImageService from "./sevice/image_service";
import ImageFileInput from "./components/image_file_input/image_file_input";

const authService = new AuthService();
const imageService = new ImageService();

const FileInput = (props) => (
  <ImageFileInput {...props} imageService={imageService} />
);

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      FileInput={FileInput}
      imageService={imageService}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
