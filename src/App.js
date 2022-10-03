import "./styles.scss";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  redirect
} from "react-router-dom";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { BiCopyright } from "react-icons/bi";
import {
  TiSocialLinkedin,
  TiSocialGithub,
  TiSocialInstagram
} from "react-icons/ti";

const classNameFunc = ({ isActive }) =>
  isActive ? "active_link" : "not_active_link";

export default function App() {
  return (
    <>
      <div className="App">
        <Router>
          <nav>
            <div>
              <span className="cube"></span>
              <span className="author-name">sai prasad</span>/
              <span className="position">software developer</span>
            </div>
            <div className="pages-link">
              <li>
                <NavLink to="/" className={classNameFunc}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/resume" className={classNameFunc}>
                  Resume
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className={classNameFunc}>
                  projects
                </NavLink>
              </li>
              <li>
                <NavLink to="contact" className={classNameFunc}>
                  contact
                </NavLink>
              </li>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
      <footer className="footer">
        <div className="editor">
          <section>
            <BiCopyright />
            2022 by Sai prasad <br />
            Proudly created with ReactJs
          </section>
        </div>
        <div className="social-contact-links">
          <section className="contact-num">
            <b>call</b> <br />
            +91-8341878981
          </section>
          <section className="contact-mail">
            <b>E-Mail</b> <br />
            saiprasad.spsp90@gmail.com
          </section>
          <section className="contact-social">
            <b>follow</b> <br />
            <TiSocialGithub />
            <TiSocialLinkedin />
            <TiSocialInstagram />
          </section>
        </div>
      </footer>
    </>
  );
}
