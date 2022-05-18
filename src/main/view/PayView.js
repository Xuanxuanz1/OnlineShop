import React,{useEffect,useState} from 'react'
import{useParams,NavLink} from "react-router-dom"
import axios from "axios"
import Tabbar from '../component/Tabbar';


export default function PayView() {
  const {id} = useParams();
  const {input_text} = useParams();
  const [list,setList] = useState([]);
  
  

  useEffect(()=>{
    axios.get("itemtext.json").then((res)=>{
      if(id<10){
        setList(res.data.data_0.filter(item=>item.id===id))
      }
      if(id>10&&id<20){
        setList(res.data.data_1.filter(item=>item.id===id))
      }
      if(id>20){
        setList(res.data.data_2.filter(item=>item.id===id))
      }
    })
  })

  const xq =()=>{
    alert("该卖家已缴纳 1000.0 元保证金。\n在确认收货 15 天内，如有商品质量问题、描述不符或未收到货等，您有权申请退款或退货，来回邮费由卖家承担。")
  }

  return (
    <div>
      {
        list.map((item)=>{
          return(
            <div key={item.id}>
              <div style={{fontSize:"22px"}}>
                收货地址
              </div>
              <div style={{marginTop:"15px",border:"1px solid rgb(241,241,241)"}}></div>
              
              <div style={{display:"flex",marginTop:"20px",fontSize:"18px"}}>
                <input name="address" style={{marginTop:"7px"}} type="radio" defaultChecked></input>
                <span>浙江省百色市上甘岭区安图路197号爱里舍花园(默认地址)</span>
              </div>

              <div style={{display:"flex",marginTop:"20px",fontSize:"18px"}}>
                <input name="address" style={{marginTop:"7px"}} type="radio"></input>
                <span>黑龙江省保山市榆次区安仁路14号阳光翠竹苑</span>
              </div>

              <div style={{display:"flex",marginTop:"20px",fontSize:"18px"}}>
                <input name="address" style={{marginTop:"7px"}} type="radio"></input>
                <span>福建省保定市乌伊岭区包头路53号协通公寓</span>
              </div>

              <div style={{display:"flex",marginTop:"20px",fontSize:"18px"}}>
                <input name="address" style={{marginTop:"7px"}} type="radio"></input>
                <input type="text" style={{width:"360px"}}></input>
              </div>

              <div style={{marginTop:"30px",fontSize:"22px"}}>
                确认订单信息
              </div>
              <div style={{marginTop:"15px",border:"1px solid rgb(241,241,241)"}}></div>

              <div style={{display:"flex",marginTop:"30px",marginLeft:"250px"}}>
                <span>店铺宝贝</span>
                <span style={{marginLeft:"300px"}}>商品属性</span>
                <span style={{marginLeft:"150px"}}>单价 </span>
                <span style={{marginLeft:"110px"}}>数量</span>
                <span style={{marginLeft:"120px"}}>总价</span>
              </div>

              <div style={{border:"1px solid rgb(178,209,255)"}}></div>

              <div style={{display:"flex",marginTop:"20px",background:"rgb(251,252,255))"}}>
                <img style={{width:"200px"}} src={item.img} alt={item.name}></img>
                <div style={{fontSize:"18px",marginLeft:"10px",width:"260px"}}>
                  <span>{item.ditails_name}</span>
                  <div style={{marginTop:"10px",fontSize:"15px",color:"rgb(156,158,180)"}}>
                    不支持7天无理由
                    <a style={{color:"rgb(51,148,226)",marginLeft:"10px"}} onClick={xq} >详情</a>
                  </div>
                  <div style={{fontSize:"15px",color:"rgb(156,158,180)"}}>发货时间：现货，付款后48小时内发货</div>
                </div>
                <div style={{display:'flex',marginTop:"30px"}}>
                  <div style={{marginLeft:"120px",fontSize:"18px"}}>
                    <span>净含量：{item.weight}</span>
                  </div>

                  <div style={{marginLeft:"120px",fontSize:"18px",marginTop:"3px"}}>
                    <span>{item.price}</span>
                  </div>

                  <div style={{marginLeft:"120px",fontSize:"18px",marginTop:"3px"}}>
                    <span>{input_text}</span>
                  </div>

                  <div style={{marginLeft:"120px",fontSize:"18px",marginTop:"3px"}}>
                    <span style={{color:"rgb(255,52,0)",fontWeight:'bold'}}>￥ {Number(item.price)*Number(input_text)}</span>
                  </div>
                </div>
              </div>

              <div style={{border:"1px solid rgb(241,241,241)"}}></div>

              <div style={{display:"flex"}}>
                <div style={{background:"rgb(242,247,255)",width:"50%",display:"flex",padding:"10px"}}>
                  <span>买家留言：</span>
                  <input type="text" style={{width:"400px",lineHeight:"60px"}} ></input>
                </div>

                <div style={{background:"rgb(242,247,255)",width:"50%",marginLeft:"3px"}}>
                  <div style={{marginTop:"20px",marginLeft:"20px"}}>
                    <span>配送方式：</span>
                    <span>普通配送 快递 免邮</span>
                    <span style={{color:"rgb(255,80,0)",fontWeight:"bold",marginLeft:"110px"}}>￥ 0</span>
                  </div>
                  
                </div>
                
              </div>

              <div style={{display:"flex",background:"rgb(242,247,255)",width:"100%",marginTop:"5px",height:"80px",fontSize:"18px"}}>
                <div style={{marginTop:"20px"}}>
                  <span>店铺合计(含运费)：</span>
                  <span style={{color:"rgb(255,80,0)"}}>￥ {Number(item.price)*Number(input_text)}</span>
                </div>
              </div>

              <div style={{display:"flex",background:"rgb(242,247,255)",width:"100%",marginTop:"5px",height:"80px",fontSize:"18px"}}>
                <div style={{display:"flex",marginTop:"20px"}}>
                  <input name="pay" style={{marginTop:"10px"}} type="radio"></input>
                  <img style={{width:"30px",height:"30px"}} src={require("../image/vx.png")} alt="微信支付"></img>
                  <span style={{marginLeft:"10px"}}>微信支付</span>
                </div>

                <div style={{display:"flex",marginTop:"20px",marginLeft:"50px"}}>
                  <input name="pay" style={{marginTop:"10px"}} type="radio"></input>
                  <img style={{width:"30px",height:"30px"}} src={require("../image/zfb.png")} alt="支付宝支付"></img>
                  <span style={{marginLeft:"10px",marginTop:"2px"}}>支付宝支付</span>
                </div>
              </div>

              <div style={{border:"1px solid rgb(241,241,241)"}}></div>
              <div style={{marginTop:"10px",display:"flex"}}>

                <div style={{marginTop:"10px"}}>
                  <input type="checkbox"></input>
                <span>朋友代付</span>
                </div>

                <div style={{marginLeft:"60px",marginTop:"10px"}}>
                  <input type="checkbox"></input>
                  <span>匿名购买</span>
                </div>

                <div style={{marginLeft:"60px",marginTop:"10px"}}>
                  <input type="checkbox"></input>
                  <span>花呗分期</span>
                </div>
                
              </div>

              <div style={{border:"1px solid rgb(241,241,241)",marginTop:"20px"}}></div>

              <div style={{marginTop:"20px"}}>
                <NavLink to={`/Login/Main/buyView/PayView/Success`}>
                <button style={{fontSize:"22px",width:"100%",background:"rgb(255,80,0)",color:"#fff",border:"1px solid #fff",padding:"10px"}}>提交订单</button>
                </NavLink>
              </div>

             <div style={{marginTop:"60px"}}></div>

            </div>
          )
        })
      }
      
    </div>
  )
}
