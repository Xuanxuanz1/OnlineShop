import React, { useEffect, useState } from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

export default function CarItemView() {
  const [del, setDel] = useState(true);

  const [list, setList] = useState([]);

  const [ischeck,setIscheck] = useState(false)

  const [checkAll, setCheckAll] = useState(false);

  useEffect(() => {
    setList((l) =>
      l.map((item) => {
        item.check = checkAll;
        return item;
      })
    );
  }, [checkAll]);

  const [input_text, setInput_text] = useState(0);

  useEffect(() => {
    axios.get("itemtext.json").then((res) => {
      const { data_0, data_1, data_2 } = res.data;
      const dataList = [...data_0, ...data_1, ...data_2];
      setList(
        dataList.map((item) => {
          item.check = false;
          return item;
        })
      );
    });
  }, []);

  const clickAdd = () => {
    var number = Number(document.getElementById("input_text").value) + 1;
    if (number >= 0) {
      document.getElementById("input_text").removeAttribute("disabled");
      Input_textChange(number);
    }
  };

  const clickReduce = () => {
    var number = Number(document.getElementById("input_text").value) - 1;
    if (number < 0) {
      document
        .getElementById("input_text")
        .setAttribute("disabled", "disabled");
    } else {
      Input_textChange(number);
    }
  };

  const Input_textChange = (number) => {
    setInput_text(number);
  };

  const Collect = () => {
    alert("宝贝已收藏");
  };

  const DelText = (index) => {
    var newList = [...list].filter(item=>item.id !== index);
    setList(newList)
  };

  const changeCheck = (id) => {
    console.log(id);
    const index = list.findIndex((item) => item.id === id);
    const newList = [...list];
    newList[index].check = !newList[index].check;
    setList(newList);
    setIscheck(!false)

    // if(checkAll===false){
    //     setcheckAllText("checked")
    //     setcheckAll(true);
    // }
    // else{
    //     setcheckAllText("")
    //     setcheckAll(false);
    // }
  };

  return (
    <div>
      <h2>购物车页面</h2>
      <div style={{ display: "flex", fontWeight: "bold" }}>
        <input
          onChange={(e) => setCheckAll(e.target.checked)}
          checked={checkAll}
          type="checkbox"
        ></input>
        <span>全选</span>
        <span style={{ marginLeft: "140px" }}>商品信息</span>
        <span style={{ marginLeft: "360px" }}>单价</span>
        <span style={{ marginLeft: "100px" }}>数量</span>
        <span style={{ marginLeft: "100px" }}>金额</span>
        <span style={{ marginLeft: "100px" }}>操作</span>
      </div>
      <div
        id="listl"
        style={{ border: "1px solid rgb(241,241,241)", marginTop: "10px" }}
      ></div>
      {list.map((item,index) => {
        return (
          <div
            key={item.id}
            style={{
              display: del ? "flex" : "none",
              marginTop: "20px",
              fontSize: "15px",
            }}
          >
            <input
              onChange={() => changeCheck(item.id)}
              checked={item.check}
              style={{ marginTop: "60px" }}
              type="checkbox"
            ></input>
            <img
              style={{ width: "200px" }}
              src={item.img}
              alt={item.name}
            ></img>
            <span style={{ marginLeft: "10px", width: "300px" }}>
              {item.ditails_name}
            </span>
            <span style={{ marginLeft: "65px", width: "135px" }}>
              ￥ {item.price}
            </span>
            <div style={{ display: "flex" }}>
              <button onClick={clickReduce} style={{ height: "25px" }}>
                {" "}
                -{" "}
              </button>
              <input
                id="input_text"
                onChange={Input_textChange.bind(this)}
                style={{ width: "30px", height: "20px", textAlign: "center" }}
                type="text"
                value={input_text}
              ></input>
              <button onClick={clickAdd} style={{ height: "25px" }}>
                {" "}
                +{" "}
              </button>
            </div>

            <span style={{ marginLeft: "65px" }}>
              ￥ {Number(input_text) * Number(item.price)}
            </span>

            <div style={{ marginLeft: "95px" }}>
              <div onClick={Collect}>移入收藏夹</div>
              <div style={{marginTop:"10px"}} onClick={()=>DelText(item.id)}>删除</div>
              <NavLink style={{color:"#000",textDecoration:"none"}} to={`/Login/Main/buyView/PayView/${item.id}/${input_text}`}>
                <div style={{marginTop:"10px"}}>去支付</div>
              </NavLink>
            </div>
          </div>
        );
      })}
      <div style={{ marginTop: "60px" }}></div>
    </div>
  );
}
