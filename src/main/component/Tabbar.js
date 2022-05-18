import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import "../css/Tabbar.css";

export default class Tabbar extends Component {
  render() {
    return (
      <div className="Tabbardiv">
        <NavLink activeClassName="Tabbaractive" className="Tabbartext" to="/Login/Main" >商品</NavLink>
        <NavLink activeClassName="Tabbaractive" className="Tabbartext" to="/Login/Car">购物车</NavLink>
        <NavLink activeClassName="Tabbaractive" className="Tabbartext" to="/Login/Center">我的</NavLink>
      </div>
    )
  }
}
