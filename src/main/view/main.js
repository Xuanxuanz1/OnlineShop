import React, { Component } from 'react';
import ItemList from './ItemList'
import {} from 'react-router-dom'
import {Swiper,SwiperSlide} from 'swiper/react'
import {Pagination,Navigation,Autoplay} from 'swiper'
import 'swiper/css/bundle'
import Tabbar from '../component/Tabbar';
class App extends Component{

    
    
    render(){
        return(
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
                
                <ItemList></ItemList>
                <Tabbar></Tabbar>
            </div>
        )
    }
}


export default App;