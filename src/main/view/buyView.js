import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import {NavLink} from "react-router-dom"

export default function BuyView(props) {
  const { id } = useParams();

  
  const [list,setList] = useState([]);
  const [listShow,setListShow] = useState([]);
  const [input_text,setInput_text] = useState(0);

  useEffect(()=>{
    axios.get("itemtext.json").then((res) => {
      // console.log(res.data.data_0)
      
      if(id<10){
        setList(res.data.data_0.filter(item=>item.id===id))
      }
      if(id>10&&id<20){
        setList(res.data.data_1.filter(item=>item.id===id))
      }
      if(id>20){
        setList(res.data.data_2.filter(item=>item.id===id))
      }
      
     
      
      
    });
  })

  const reduceNumber=()=>{
    var number = Number(document.getElementById("input_text").value)-1;
    if(number<0){
      document.getElementById("input_text").setAttribute("disabled","disabled");
    }
    else{
      onChangeInput(number);
    }
    
    
  };

  const addNumber=()=>{
    var numebr = Number(document.getElementById("input_text").value)+1;
    if(numebr>=0){
      document.getElementById("input_text").removeAttribute("disabled")
      onChangeInput(numebr)
    }
    
    
  }
  const onChangeInput=(number)=>{
    // console.log(number)
    setInput_text(number)
  }
  
  

  return (
    <div>
      {/* {id} */}
      {
        list.map((item)=>{
          return(
            <div key={item.id} style={{display:"flex"}}>
              <img style={{width:"450px"}} src={item.img} alt={item.name}></img>
              <div style={{marginLeft:"30px",padding:"10px"}}>
                <div style={{fontSize:"25px"}}>{item.ditails_name}</div>
                <div style={{display:"flex",marginTop:"20px",fontSize:"22px",background:"rgb(255,242,232)"}}>
                  <span>价格：</span>
                  <div style={{color:"rgb(255,68,0)"}}>
                    <span>￥ </span>
                    <span>{item.price}</span>
                    <span style={{color:"rgb(108,108,108)",marginLeft:"470px"}}>{item.Monthly}</span>
                  </div>
                </div>

                <div style={{display:"flex",marginTop:"20px",fontSize:"22px"}}> 
                  <span>优惠：</span>
                  <div>{item.type_shop}</div>
                </div>

                <div style={{display:"flex",fontSize:"22px",marginTop:"20px"}}>
                  <span>净含量：</span>
                  <span>{item.weight}</span>
                </div>

                <div style={{display:"flex",fontSize:"22px",marginTop:"20px"}}>
                  <span>数量：</span>
                  <button onClick={reduceNumber}> - </button>
                  <input onChange={onChangeInput.bind(this)} id="input_text" type="text" style={{width:"60px",textAlign:'center'}} value={input_text}></input>
                  <button onClick={addNumber}> + </button>
                </div>

                <NavLink to={`/Login/Main/buyView/PayView/${item.id}/${input_text}`}>
                <div style={{marginTop:"20px"}}>
                  <button style={{fontSize:"22px",background:"rgb(255,217,188)",color:"rgb(229,81,29)",border:"1px solid rgb(229,81,29)"}}>立即购买</button>
                </div>
                </NavLink>
              </div>
            </div>
          )
        })
      }
      
    </div>
  );
}
