import { Link, useLocation } from "react-router-dom";
import logo from "./images/logo.jpg";
import dark from "./images/dark mode.png";
import light from "./images/light mode.png";
import "./Navbar.css";
import { useState, useEffect } from "react";

const Navbar = (props) => {
  let location = useLocation();
  const [currentTime, setCurrentTime] = useState();
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  // Format the time in 24-hour format
  const formatTime = (date) => {
    if (!date) return ""; // Return empty string if date is not available

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  };
  return (
    <>
      <nav
        className={`shadow-lg border-bottom border-${
          props.mode
        } z-1 navbar navbar-expand-lg sticky-top navbar-${props.mode} bg-${
          props.mode === "Dark" ? "dark" : "white"
        } text-${props.mode === "Dark" ? "white" : "dark"}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              style={{
                height: "40px",
                borderRadius: "40px",
                marginRight: "10px",
              }}
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{
              backgroundColor: "white",
              border: `1px solid ${props.mode === "Dark" ? "white" : "dark"}`,
            }}
          >
            <span
              className="navbar-toggler-icon"
              style={{
                color: `${props.mode === "Dark" ? "dark" : "white"}`,
              }}
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`text-hover nav-link ${
                    location.pathname === "/"
                      ? "text-decoration-underline"
                      : "text-decoration-none"
                  } link-underline-primary link-offset-2 text-${
                    props.mode === "Dark" ? "light" : "primary"
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`text-hover nav-link ${
                    location.pathname === "/business"
                      ? "text-decoration-underline"
                      : "text-decoration-none"
                  } link-underline-primary link-offset-2 text-${
                    props.mode === "Dark" ? "light" : "primary"
                  }`}
                  to="/business"
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`text-hover nav-link ${
                    location.pathname === "/entertainment"
                      ? "text-decoration-underline"
                      : "text-decoration-none"
                  } link-underline-primary link-offset-2 text-${
                    props.mode === "Dark" ? "light" : "primary"
                  }`}
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`text-hover nav-link ${
                    location.pathname === "/health"
                      ? "text-decoration-underline"
                      : "text-decoration-none"
                  } link-underline-primary link-offset-2 text-${
                    props.mode === "Dark" ? "light" : "primary"
                  }`}
                  to="/health"
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`text-hover nav-link ${
                    location.pathname === "/science"
                      ? "text-decoration-underline"
                      : "text-decoration-none"
                  } link-underline-primary link-offset-2 text-${
                    props.mode === "Dark" ? "light" : "primary"
                  }`}
                  to="/science"
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`text-hover nav-link ${
                    location.pathname === "/sports"
                      ? "text-decoration-underline"
                      : "text-decoration-none"
                  } link-underline-primary link-offset-2 text-${
                    props.mode === "Dark" ? "light" : "primary"
                  }`}
                  to="/sports"
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`text-hover nav-link ${
                    location.pathname === "/technology"
                      ? "text-decoration-underline"
                      : "text-decoration-none"
                  } link-underline-primary link-offset-2 text-${
                    props.mode === "Dark" ? "light" : "primary"
                  }`}
                  to="/technology"
                >
                  Technology
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <span>
                <img
                  onClick={props.toggleMode}
                  src={props.mode === "Dark" ? light : dark}
                  alt=""
                  style={{ cursor: "pointer" }}
                />
              </span>
              {
                <div
                  className={`fs-5 mx-2 btn btn-primary border border-black`}
                >
                  <span style={{ fontFamily: "inherit" }}>
                    {formatTime(currentTime)}
                  </span>
                </div>
              }
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;