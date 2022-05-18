import React, { Component } from "react";
import ItemList from "./ItemList";
import {NavLink} from "react-router-dom";

import "swiper/css/bundle";
import Tabbar from "../component/Tabbar";
class App extends Component {
    state={
        isShow:false
    }

    componentDidMount=()=>{
        setTimeout(()=>{
            this.setState({
                isShow:true
            })
          },5000)
    }

    deldeladvertisement=()=>{
        this.setState({
            isShow:false
        })
        setTimeout(()=>{
          this.setState({
              isShow:true
          })
        },5000)
      }
  render() {
      
      
    return (
      <div>
        <div
          style={{
            background: "rgb(232,226,224)",
            margin: "10px",
            borderRadius: "5px",
          }}
        >
          <div style={{ padding: "5px", fontSize: "18px" }}>
            <span style={{ fontWeight: "bold" }}>公告</span>
            <span style={{ marginLeft: "20px" }}>新鲜事儿都在这里~</span>
          </div>
          <div style={{ padding: "5px", marginLeft: "5px" }}>
            <span style={{ color: "rgb(255,123,16)", fontWeight: "bold" }}>
              规则
            </span>
            <NavLink style={{textDecoration:"none"}} to={`/Login/Main/Test1`}>
                <a style={{ marginLeft: "20px",color:"#000" }} >
              Online Shopping Mall受疫情地区影响发货时间要求调整公告
            </a>
            </NavLink>
          </div>
          <div style={{ padding: "5px", marginLeft: "5px" }}>
            <span style={{ color: "rgb(255,123,16)", fontWeight: "bold" }}>
              热点
            </span>
            <NavLink style={{textDecoration:"none"}} to={`/Login/Main/Test2`}>
            <a style={{ marginLeft: "20px",textDecoration:"none",color:"#000" }} >疫情场景卖家指导手册</a>
            </NavLink>
          </div>
          <div style={{ padding: "5px", marginLeft: "5px" }}>
            <span style={{ color: "rgb(255,123,16)", fontWeight: "bold" }}>
              热点
            </span>
            <NavLink style={{textDecoration:'none'}} to={`/Login/Main/Test3`}>
                <a style={{ marginLeft: "20px",textDecoration:"none",color:"#000" }}>
                本平台打击流里造假﹑黑公关、网络水军公告
                </a>
            </NavLink>
          </div>
        </div>

        <div style={{ position: "fixed", right: "0px", top: "410px",zIndex:200,display:this.state.isShow?"inline":"none" }}>
          <NavLink to={`/Login/Main/Advertisement`}>
            <img  src="https://s3m1.fenxi.com/galileo/0f57f04a9fb5eb2d29575aa4bf35160b.gif"></img>
          </NavLink>
          <span
          onClick={this.deldeladvertisement}
            style={{
              position: "fixed",
              right: "3px",
              top: "410px",
              border: "1px solid #fff",
              color: "#fff",
            }}
          >
            关闭X
          </span>
        </div>

        <ItemList></ItemList>

        <Tabbar></Tabbar>
      </div>
    );
  }
}

export default App;
