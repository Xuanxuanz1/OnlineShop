import React,{useEffect,useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {NavLink} from 'react-router-dom';
import axios from 'axios';

export default function Success() {
    const id = uuidv4().substring(0,18);

    const [list,setList] = useState([]);

    useEffect(()=>{
      axios.get("http://localhost:8000/").then((res)=>{
        // console.log(res.data)

        setList(res.data)

      })
    },[])
    
  return (
    <div>
        <div style={{fontSize:"30px"}}>
            <span>订单提交成功，感谢您的购买！</span>
            <span>订单号：{id}</span>
        </div>
        

        <div style={{marginTop:"10px"}}>
          <NavLink style={{textDecoration:"none",color:"rgb(255,52,0)"}} to={`/Login/Main`}>返回主页</NavLink>
        </div>
    </div>
  )
}
