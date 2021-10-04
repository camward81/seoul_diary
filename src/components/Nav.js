import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <nav className="nav">
      <h1>
        <Link to="/">Seoul Diary</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Intro</Link>
          <motion.div
            className="line"
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "100%" : "0%" }}
          ></motion.div>
        </li>
        <li>
          <Link to="/old">Old Town</Link>
          <motion.div
            className="line"
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/old" ? "100%" : "0%" }}
          ></motion.div>
        </li>
        <li>
          <Link to="/new">New Town</Link>
          <motion.div
            className="line"
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/new" ? "100%" : "0%" }}
          ></motion.div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
