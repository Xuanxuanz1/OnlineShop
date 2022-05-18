import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import {NavLink} from 'react-router-dom'

export default function OrderView() {

    const [list,setList] = useState([]);
    const [isdel,setIsdel] = useState(false)
    
    useEffect(()=>{
        axios.get("order.json").then((res)=>{
            console.log(res.data.data)
            setList(res.data.data)
        })
    },[])

    const sayNo=()=>{
        alert("货物出柜，拒不退款")
    };
    const phone=()=>{
        alert('欢迎致电投诉电话：0757-85778945')
    };
    const sendD=()=>{
        alert("暂无物流信息")
    };
    const Detailed=(message)=>{
        alert(message)
    };
    const good=()=>{
        alert("评价功能暂未开通")
    };
    const fp=()=>{
        alert("暂无发票")
    };
    const del=(index)=>{
        var newList = [...list].filter(item=>item.id !== index);
        setList(newList)
    }

  return (
    <div>
        <div style={{display:"flex",width:"100%"}}>
            <h2>订单列表</h2>

            <NavLink style={{textDecoration:"none"}} to={`/Login/Center`}>
                <span style={{fontSize:"23px",marginTop:"22px",marginLeft:"1250px",color:"rgb(255,68,1)"}}>Back</span>
            </NavLink>
        </div>
        <div style={{display:"flex",background:"rgb(245,245,245)",fontSize:"18px",padding:"10px",border:"1px solid rgb(191,191,191)"}}>
            <span style={{marginLeft:"220px"}}>宝贝</span>
            <span style={{marginLeft:"240px"}}>单价</span>
            <span style={{marginLeft:"85px"}}>数量</span>
            <span style={{marginLeft:"66px"}}>商品操作</span>
            <span style={{marginLeft:"110px"}}>实付款</span>
            <span style={{color:"rgb(102,102,102)",marginLeft:"110px"}}>交易状态</span>
            <span style={{marginLeft:"111px"}}>交易操作</span>
        </div>
        {
            list.map((item,index)=>{
                const uuid = uuidv4().substring(0,18);
                return(
                    <div key={item.id} style={{marginTop:"20px",border:"1px solid rbg(174,216,255)"}}>
                        <div style={{width:"100%",background:"rgb(234,248,255)",padding:"10px",border:"1px solid rgb(174,216,255)"}}>
                            <span>{item.date}</span>
                            <span style={{marginLeft:"30px"}}>订单号：{uuid}</span>
                            <span onClick={()=>del(item.id)} style={{marginLeft:"1000px"}}>删除</span>
                        </div>
                        <div style={{display:'flex'}}>
                            <div style={{border:"1px solid rgb(174,216,255)",padding:"30px",display:"flex"}}>
                                <img style={{width:"200px",height:"180px"}} src={item.img} alt=""></img>
                                <div style={{marginLeft:"10px",marginTop:"10px"}}>
                                    <div style={{width:"230px"}}>{item.ditails_name}</div>
                                    <div style={{color:"rgb(158,158,158)",marginTop:"60px"}}>分类：{item.weight}</div>
                                </div>
                                <div style={{marginTop:"10px",marginLeft:"20px"}}>￥ {item.price}</div>
                                <div style={{marginTop:"10px",marginLeft:"80px"}}>{item.buyNumber}</div>
                                <div style={{marginTop:"10px",marginLeft:"80px"}}>
                                    <div onClick={sayNo}>退款/退货</div>
                                    <div onClick={phone} style={{marginTop:"10px"}}>投诉卖家</div>
                                </div>

                            </div>

                            <div style={{border:"1px solid rgb(174,216,255)",padding:"30px",textAlign:"center"}}>
                                <div style={{marginTop:"10px",fontWeight:"bold"}}>￥ {Number(item.price)*Number(item.buyNumber)}</div>
                                <div style={{color:"rgb(108,108,108)"}}>（含运费：￥ 0.00）</div>
                            </div>

                            <div style={{border:"1px solid rgb(174,216,255)",padding:"30px",textAlign:"center"}}>
                                <div style={{marginTop:"10px"}}>{item.nowState}</div>
                                <div onClick={()=>Detailed(item.ditails_name)} style={{marginTop:"10px"}}>订单详情</div>
                                <div onClick={sendD} style={{marginTop:"10px"}}>查看物流</div>
                            </div>

                            <div style={{border:"1px solid rgb(174,216,255)",padding:"30px",textAlign:"center",width:"160px"}}>
                                <div onClick={good} style={{marginTop:"10px"}}>追加评论</div>
                                <div onClick={fp} style={{marginTop:"10px"}}>申请开票</div>
                                
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}
