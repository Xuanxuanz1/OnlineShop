import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/ItemList.css";
import { NavLink, useHistory } from "react-router-dom";
import {Swiper,SwiperSlide} from 'swiper/react'
import {Pagination,Navigation,Autoplay} from 'swiper'
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
      <Swiper modules={[Navigation,Pagination,Autoplay]}
                    pagination={{clickable:true}}
                    style={{
                        height:"400px",
                        // background:"green"
                    }}
                    loop={true}
                    autoplay={true,{delay:3000}}>
                    <SwiperSlide>
                        <img style={{height:"400px",width:"100%"}} src="https://m.360buyimg.com/babel/jfs/t1/192589/37/23892/129366/6268b747E59790a75/a43836d0c1a67b8d.png" alt="1"></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img style={{height:"400px",width:"100%"}} src="//cdn.pinduoduo.com/upload/home/img/subject/home.jpg" alt="2"></img>

                    </SwiperSlide>
                    <SwiperSlide>
                        <img style={{height:"400px",width:"100%"}} src="https://m.360buyimg.com/babel/jfs/t1/189857/7/24347/123508/626b5422E2235f20d/f8e1fb5c2fb70695.jpg" alt="3"></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img style={{height:"400px",width:"100%"}} src="//cdn.pinduoduo.com/upload/home/img/subject/food.jpg" alt="4"></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img style={{height:"400px",width:"100%"}} src="https://m.360buyimg.com/babel/jfs/t1/91139/5/27610/70951/626d404bE3431e4a8/3a9033ddb4ed94e4.jpg" alt="5"></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img style={{height:"400px",width:"100%"}} src="https://m.360buyimg.com/babel/jfs/t1/61121/31/17593/90766/626c08cdEe7921f15/8494669c17dd900f.png" alt="6"></img>
                    </SwiperSlide>
                </Swiper>
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
                <div className="div1" key={itme.id}  onClick={()=>toBuy(itme.id)}>
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
                <div className="div2" key={itme.id} >
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
                <div className="div3" key={itme.id} >
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
      
      {/* <div style={{position:'fixed',right:"0px",top:"410px"}}>
      <img style={{display:isshow?'inline':'none'}}  src='https://s3m1.fenxi.com/galileo/0f57f04a9fb5eb2d29575aa4bf35160b.gif'></img>
      <span onClick={deldeladvertisement} style={{position:'fixed',right:"3px",top:"410px",border:"1px solid #fff",color:"#fff"}}>关闭X</span>
      </div> */}
      
    </div>
  );
}

export default ItemList;
