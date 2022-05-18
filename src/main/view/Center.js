import React from 'react';
import {NavLink} from "react-router-dom"
import Tabbar from '../component/Tabbar';

export default function center() {

  const selfSet=()=>{
    alert("Personal Settings")
  };
  const service=()=>{
    alert("Service Center")
  }

  return (
    <div>
      <div style={{marginLeft:"280px",display:"flex"}}>
       <img style={{width:"300px",borderRadius:"5%"}} src={require("../image/image_01.png")} alt="头像"></img>
       <div style={{display:'inline',marginLeft:"160px",marginTop:"60px",fontSize:"18px"}}>
         <div>用户名：xuanx</div>
         <div style={{marginTop:"30px"}}>账号：598409738</div>

       </div>
       
       
      </div>

      <div style={{border:"1px solid rgb(241,241,241)",marginTop:"110px"}}></div>
      <NavLink style={{textDecoration:"none",color:"#000"}} to={`/Login/Center/UserView`}>
        <div style={{textAlign:'center',marginTop:"10px"}}>个人信息</div>
      </NavLink>
      

      <div style={{border:"1px solid rgb(241,241,241)",marginTop:"30px"}}></div>
      <NavLink style={{textDecoration:"none",color:"#000"}} to={`/Login/Center/OrderView`}>
        <div style={{textAlign:'center',marginTop:"10px"}}>订单列表</div>
      </NavLink>

      <div style={{border:"1px solid rgb(241,241,241)",marginTop:"30px"}}></div>
      <div onClick={selfSet} style={{textAlign:'center',marginTop:"10px"}}>个人设置</div>

      <div style={{border:"1px solid rgb(241,241,241)",marginTop:"30px"}}></div>
      <div onClick={service} style={{textAlign:'center',marginTop:"10px"}}>服务中心</div>

      <div style={{border:"1px solid rgb(241,241,241)",marginTop:"30px"}}></div>
      <NavLink style={{textDecoration:"none",color:"#000"}} to={`/Login`}>
        <div style={{textAlign:'center',marginTop:"10px"}}>退出登录</div>
      </NavLink>
      <Tabbar></Tabbar>
    </div>
  )
}
