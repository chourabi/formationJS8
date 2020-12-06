import React from 'react';

const style = {
    styleBTN : {
        backgroundColor :"red"
    },

    styleTextBtn: {
        color:"white"
    }
}

class LikeBtn extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            counter: props.counter,
            label:props.didLike === true ? "Dislike" : "Like",
            didLike:props.didLike
        }


        this.likeToggle = this.likeToggle.bind(this);
    }


    likeToggle(){
        this.setState({
            didLike : ! this.state.didLike ,
            counter : this.state.didLike === true ? this.state.counter - 1 : this.state.counter + 1,
            label : this.state.didLike === true ? "Like" : "Dislike"
        })
    }


    render(){
        return(
            <div>
                <button className="mybtn" onClick={ this.likeToggle } > <span style={style.styleTextBtn}>{this.state.label} { this.state.counter }</span> </button>
            </div>
        );
    }
}

export default LikeBtn;