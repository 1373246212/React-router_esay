import React, { Component } from 'react';

class ProductDetail extends Component {
    render() {
        let products={
            "1":[
                {name:"海尔冰箱"},
                {name:"长虹冰箱"}
            ],
            "2":[
                {name:"凤凰牌"},
                {name:"乐视牌"}
            ],
            "3":[
                {name:"格力"},
                {name:"美的"}
            ],
            "4":[
                {name:"洗衣机"},
                {name:"洗衣机"}
            ],
            "5":[
                {name:"大型冰柜"},
                {name:"小型冰柜"}
            ]
                
        }
        let arr=products[this.props.match.params.id];
        let divs=arr.map((item,i)=>{
            return <div key={i}>{item.name}</div>
        });
        
        return (
            <div>
               {divs} 
            </div>
        );
    }
}

export default ProductDetail;