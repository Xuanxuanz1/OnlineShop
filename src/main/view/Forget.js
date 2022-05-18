import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Forget() {
  return (
    <div>
        <div style={{display:"flex",background:"rgb(240,249,250)"}}>
            <div style={{textAlign:'center',width:"50%"}}>
                <h1>Don't worry</h1>
                <h1>Register a new account</h1>
                <div style={{fontSize:"20px",marginTop:"30px"}}>
                    <span>UserName：</span>
                    <input style={{width: "260px", lineHeight: "25px",}} type="text"></input>
                </div>

                <div style={{fontSize:"20px",marginTop:"30px"}}>
                    <span>Password：</span>
                    <input style={{width: "260px", lineHeight: "25px",}} type="password"></input>
                </div>

                <div style={{fontSize:"20px",marginTop:"30px"}}>
                    <span>Sex：</span>
                    <input type="radio"></input>
                    <span>Boy </span>
                    <input type="radio"></input>
                    <span>Girl</span>
                </div>

                <div style={{fontSize:"20px",marginTop:"30px"}}>
                    <span>Email：</span>
                    <input style={{width: "260px", lineHeight: "25px",}} type="email"></input>
                </div>

                <div style={{fontSize:"20px",marginTop:"30px"}}>
                    <span>Birth：</span>
                    <input style={{width: "260px", lineHeight: "25px",}} type="date"></input>
                </div>

                <div style={{fontSize:"20px",marginTop:"30px"}}>
                    <span>Address：</span>
                    <input style={{width: "260px", lineHeight: "25px",}} type="text"></input>
                </div>
                
                <NavLink to={`/Login`}>
                    <button style={{marginTop:"30px",width: "400px",height: "40px",fontSize: "18px",background: "rgb(92,172,235)",color: "#fff",border: "1px solid rgb(92,172,235)",borderRadius: "10px"}}>Register</button>
                </NavLink>
            </div>
            <img style={{width:"700px",height:"600px",padding:"68px"}} src="https://img.zcool.cn/community/0108475bee813ea8012092529591f6.jpg@2o.jpg"></img>
        </div>
        
        
    </div>
  )
}
