import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./app.module.css";
import Login from "./components/login/login.jsx";
import Maker from "./components/maker/maker";

const App = ({ authService, imageService, FileInput }) => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login authService={authService} />} />
          <Route
            path="/maker"
            element={
              <Maker
                authService={authService}
                FileInput={FileInput}
                imageService={imageService}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
