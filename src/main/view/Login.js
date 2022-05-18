import React, { useEffect, useState } from "react";
import {useHistory,NavLink } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [list, setList] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:8000/").then((res) => {
      setList(res.data);
    });
  }, []);

  const history = useHistory();
  const LoginCheck = () => {
    var admin = document.getElementById("admin").value;
    var password = document.getElementById("password").value;
    list.map((item) => {
      if (item.username === admin && item.password === password) {
        history.push("/Login/Center");
      }
    });
  };

  return (
    <div
      style={{ background: "rgb(240,249,250)", width: "100%", height: "730px" }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ marginLeft: "200px", marginTop: "120px" }}>
          <div style={{ fontSize: "30px" }}>Online Shopping Mall</div>
          <div style={{ fontSize: "20px", marginTop: "60px" }}>
            <span>UserName：</span>
            <input
              id="admin"
              type="text"
              style={{ width: "260px", lineHeight: "25px", marginTop: "20px" }}
            ></input>
          </div>
          <div style={{ fontSize: "20px" }}>
            <span>Password： </span>
            <input
              id="password"
              type="password"
              style={{ width: "260px", lineHeight: "25px", marginTop: "20px" }}
            ></input>
          </div>
          <div style={{ fontSize: "18px", marginTop: "20px" }}>
            <input type="checkbox"></input>
            <span>Remmber</span>
            <NavLink style={{textDecoration:"none",color:"#000"}} to={`/Login/Forget`}>
              <span style={{ marginLeft: "130px" }}>
                Forget
              </span>
            </NavLink>
          </div>

          <div style={{ display: "flex", marginTop: "50px" }}>
            <button
              onClick={LoginCheck}
              style={{
                width: "400px",
                height: "40px",
                fontSize: "18px",
                background: "rgb(92,172,235)",
                color: "#fff",
                border: "1px solid rgb(92,172,235)",
                borderRadius: "10px",
              }}
            >
              Login
            </button>
          </div>
        </div>
        <img
          style={{ width: "700px", marginTop: "100px", marginLeft: "70px" }}
          src={require("../image/loginimage.png")}
        ></img>
      </div>
    </div>
  );
}
