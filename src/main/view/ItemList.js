import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/ItemList.css";
import { NavLink, useHistory } from "react-router-dom";

function ItemList() {
  const [list, setList] = useState([]);
  const [list1,setList1] = useState([]);
  const [list2,setList2] = useState([]);

  const history = useHistory();

  useEffect(() => {
    axios.get("itemtext.json").then((res) => {
      // console.log(res.data.data)
      setList(res.data.data_0);
      setList1(res.data.data_1);
      setList2(res.data.data_2);
    });
  }, []);

  // useEffect(()=>{
  //   axios.get("server/db.js").then(res=>{
  //     console.log(res)
  //   })
  // },[]);

  const toBuy=(id)=>{
    
  }
  
  return (
    <div>
      {/* {list.map((item) => {
        return (
          <div key={item.commodity_ID} className="divTop">
            <img
              className="commodity_img"
              src={item.commodity_img}
              alt={item.commodity_Name}
            ></img>
            <div className="divs">
              <div className="commodity_name">{item.commodity_Name}</div>
              <div className="commodity_Volume">
                <span>月销：</span>
                {item.commodity_Volume}
              </div>
              <div>{item.commodity_title}</div>
              <div>
                {item.commodity_Money}
                <span>￥</span>
              </div>
              <div>
                <span>库存：</span>
                {item.commodity_Stock}
              </div>
            </div>
            <div className="divs">
              <div className="aClick">
                <NavLink
                  style={{ textDecorationLine: "none",color:"#E1F5A9" }}
                  to={`/Main/buyView/${item.commodity_ID}`}
                >
                  立即购买
                </NavLink>
              </div>
            </div>
          </div>
        );
      })} */}

      <div>
        <div style={{fontSize:"20px",fontWeight:'bold',marginTop:"30px",marginBottom:"10px"}}>超值优惠</div>
        <div style={{border:"1px solid rgb(247,247,247)",width:"100%"}}></div>
        <div style={{display:'flex',flexWrap:'nowrap',width:"200px"}}>
          {
            list.map((itme)=>{
              return(
                <NavLink key={itme.id} style={{textDecoration:"none",color:"#000"}} to={`/Login/Main/buyView/${itme.id}`}>
                <div key={itme.id} style={{marginTop:"20px",marginLeft:"60px"}} onClick={()=>toBuy(itme.id)}>
                  <img style={{height:"150px",width:"225px"}} src={itme.img} alt={itme.name}></img>
                  <div style={{marginLeft:"70px",}}>{itme.name}</div>
                </div>
                </NavLink>
               )
            })
          }
        </div>


        <div style={{fontSize:"20px",fontWeight:'bold',marginTop:"30px",marginBottom:"10px"}}>人气商品</div>
        <div style={{border:"1px solid rgb(247,247,247)",width:"100%"}}></div>
        <div style={{display:'flex',flexWrap:'nowrap',width:"200px"}}>
          {
            list1.map((itme)=>{
              return(
                <NavLink key={itme.id} style={{textDecoration:"none",color:"#000"}} to={`/Login/Main/buyView/${itme.id}`}>
                <div key={itme.id} style={{marginTop:"20px",marginLeft:"60px"}}>
                  <img style={{height:"150px",width:"225px"}} src={itme.img} alt={itme.name}></img>
                 <div style={{marginLeft:"70px"}}>{itme.name}</div>
                </div>
                </NavLink>
               )
            })
          }
        </div>

        <div style={{fontSize:"20px",fontWeight:'bold',marginTop:"30px",marginBottom:"10px"}}>猜你喜欢</div>
        <div style={{border:"1px solid rgb(247,247,247)",width:"100%"}}></div>
        <div style={{display:'flex',flexWrap:'nowrap',width:"200px"}}>
          {
            list2.map((itme)=>{
              return(
                <NavLink key={itme.id} style={{textDecoration:"none",color:"#000"}} to={`/Login/Main/buyView/${itme.id}`}>
                <div key={itme.id} style={{marginTop:"20px",marginLeft:"60px"}}>
                  <img style={{height:"150px",width:"225px"}} src={itme.img} alt={itme.name}></img>
                 <div style={{marginLeft:"70px"}}>{itme.name}</div>
                </div>
                </NavLink>
               )
            })
          }
        </div>
        
      </div>
      
      <div style={{marginTop:"60px"}}></div>
      

    </div>
  );
}

export default ItemList;
