import React, { Component } from 'react';
import './slideno.css';
 export class Slideno extends Component {
    constructor(props){

        super(props);
  this.state={
    posts:[],
  }
    }
    componentDidMount(){

        fetch('https://5ed296ce717d5f0016518314.mockapi.io/api/v1/homepage-data')
        .then(res=>res.json())
        .then(data=>this.setState({posts:data}))
      }

  render() {
      
    return (
    <div >{
        this.state.posts.map((post)=>{
            return(
         //  console.log(post.landingSection)
         <div className="product">
            { post.landingSection.map((item)=>{
            return(
              <div className="box-img"> 
                
            <h4>{item.name}</h4>
            <img src={item.preview_image} alt="" />
                

</div>
            )
        })}
           </div>
            )
        })
    }
      </div>
    );
  }
}

