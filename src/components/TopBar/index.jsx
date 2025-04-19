import { AppBar, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar() {
  const userName = "Bui Duc Hung";
  const pathname = useLocation().pathname;
  const user = pathname.slice(pathname.lastIndexOf("/") + 1);
  const data = models.userModel(user);
  let currentContext = "data";
  if (!data) {
    currentContext = "no data";
  }
  console.log("Pathname: >>>", pathname);
  currentContext =
    pathname === "/"
      ? "Home"
      : pathname === "/users"
      ? "List of users"
      : pathname.startsWith("/users/")
      ? data && `Details of ${data.first_name} ${data.last_name}`
      : pathname.startsWith("/photos/")
      ? data && `Photos of ${data.first_name} ${data.last_name}`
      : "error";
  console.log("current context: >>>", currentContext);
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            {userName}
          </Link>
          {" | "}
          <Link to="/users" style={{ textDecoration: "none", color: "black" }}>
            Users
          </Link>
        </Typography>
        <Typography variant="h6" component="div">
          {currentContext}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
