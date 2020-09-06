import React, { Component } from 'react';


export class Monthly extends Component {

    constructor(props){

        super(props);
  this.state={
    price:[],
  }
    }
    componentDidMount(){

        fetch('https://5ed296ce717d5f0016518314.mockapi.io/api/v1/pricing-details')
        .then(res=>res.json())
        .then(data=>this.setState({price:data}))
      }

  render() {
    return (
        <div >{
            this.state.price.map((result)=>{
                return(
        // console.log(post)
        <div>
            {result.Monthly.map((item)=>{
                return(
                    console.log(item)
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

