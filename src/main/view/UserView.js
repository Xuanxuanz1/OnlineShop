import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom'

export default function UserView() {

  const [list,setList] = useState([]);

  useEffect(()=>{
    axios.get("user.json").then((res)=>{
      setList(res.data.data[0])
      // console.log(res.data.data[0])
      
    })
  },[])

  return (
    <div style={{background:"rgb(240,249,250)",width:"100%",height:"750px"}}>
      <div style={{marginLeft:"30%",fontSize:"28px"}}>
        <img style={{width:"400px",borderRadius:"8px"}} src={require("../image/image_01.png")} alt="head"></img>
        <div>
          <div style={{marginTop:"20px"}}>UserName：{list.username}</div>
          <div style={{marginTop:"10px"}}>Sex：{list.sex}</div>
          <div style={{marginTop:"10px"}}>Birth：{list.birth}</div>
          <div style={{marginTop:"10px"}}>Email：{list.email}</div>
          <div style={{marginTop:"10px"}}>Address：{list.address}</div>
          <NavLink style={{textDecoration:"none",color:"#000"}} to={`/Login/Center`}>
            <div style={{marginTop:"10px",color:"rgb(255,68,1)"}}>back</div>
          </NavLink>
        </div>
        
      </div>
    </div>
  )
}
