import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Login from "./Login";

const LoginProvider = ({ children }) => {
  const [data, setData] = useState();
  const [showLogin, setShowLogin] = useState(false);

  const onLogin = (email, password) => {
    fetch("https://api.tutedude.com/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        if (data.success === "true" || data.success === true) {
          setData(data.dashboard);
          Cookies.set("user_email", email);
          Cookies.set("user_pass", password);
        } else {
          window.alert("Invalid Email or Password");
        }
      })
      .catch((err) => {
        window.alert("Something went wrong");
      });
  };

  useEffect(() => {
    const email = Cookies.get("user_email");
    const password = Cookies.get("user_pass");

    if (!email || !password) {
      setShowLogin(true);
      return;
    }

    fetch("https://api.tutedude.com/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        if (data.success === "true" || data.success === true) {
          setData(data.dashboard);
          setShowLogin(false);
        } else {
          setShowLogin(true);
        }
      })
      .catch(() => {
        setShowLogin(true);
      });
  }, []);

  if (showLogin && !data) return <Login onSubmit={onLogin} />;
  if (!data) return "Loading...";
  return <>{children}</>;
};

export default LoginProvider;
