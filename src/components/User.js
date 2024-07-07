import React from "react";

class User extends React.Component{
    constructor(props){
        super(props);
       
        this.state = {
            count:0,
            count2:1
        };

    }

    render(){
       
        return (
            <div className="about-container">
                <div className="user">{this.props.a}</div>
                
               
               
                {/* <div className="about">{this.state.count=90} */}
                {/* </div> */}
                <div className="about">count: {this.state.count}
                </div>

                <button onClick={()=>{
                    this.setState(
                        {count:this.state.count+1}
                    );
                }}>click</button>
                <div>{this.state.count}</div>
            </div>
        );
    };
}

export default User;