import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/navbar";
import Teaser from "./components/teaser";
import Movies from "./components/Movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import MoviesForm from "./components/moviesForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import NotFound from "./components/notFound";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/movies" element={<Teaser />} />
        {["/login", "register", "/movies/:id", "/customers", "/rentals"].map(
          (path) => (
            <Route key={path} path={path} element={<Navbar />} />
          )
        )}
      </Routes>

      <main className="container">
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/movies/:id" element={<MoviesForm />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route exact path="/" element={<Navigate to="/movies" />} />
          <Route path="/*" element={<Navigate to="/not-found" />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
