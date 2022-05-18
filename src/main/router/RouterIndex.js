import React, { Component } from "react";
import { Route, Switch, HashRouter, Redirect } from "react-router-dom";
import Main from "../view/main";
import ItemList from "../view/ItemList";
import Center from "../view/Center";
import buyView from "../view/buyView";
import Tabbar from "../component/Tabbar";
import Car from "../view/Car";
import PayView from "../view/PayView";
import Success from "../view/Success";
import Login from '../view/Login';
import UserView from "../view/UserView";
import OrderView from "../view/OrderView";
import CarItemView from "../view/CarItemView";
import Forget from "../view/Forget";
import Test1 from "../view/announcement/test1"
import Test2 from "../view/announcement/test2"
import Test3 from "../view/announcement/test3"
import Advertisement from "../view/Advertisement";

export default class RouterIndex extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route path="/Login" exact component={Login}></Route>
            <Route path="/Login/Forget" exact component={Forget}></Route>
            
            <Route path="/Login/Center" exact component={Center}></Route>
            <Route path="/Login/Center/UserView"exact component={UserView}></Route>
            <Route path="/Login/Center/OrderView" exact component={OrderView}></Route>
            <Route path="/Login/Car" component={Car}></Route>
            <Route path="/Login/Main" exact  component={Main}></Route>
            <Route path="/Login/Main/Test1" component={Test1}></Route>
            <Route path="/Login/Main/Test2" component={Test2}></Route>
            <Route path="/Login/Main/Test3" component={Test3}></Route>
            <Route path="/Login/Main/Advertisement" component={Advertisement}></Route>
            <Route path="/Login/Main/buyView/payView/Success" component={Success}></Route>
            <Route path="/Login/Main/buyView/PayView/:id/:input_text" component={PayView}></Route>
            <Route path="/Login/Main/buyView/:id" component={buyView}></Route>
            <Route path="/Login/Car" component={CarItemView}></Route>
            
            <Redirect from="/" to="/Login" exact></Redirect>
            

            
          </Switch>
          {/* <Tabbar></Tabbar> */}
        </HashRouter>
        
      </div>
    );
  }
}
