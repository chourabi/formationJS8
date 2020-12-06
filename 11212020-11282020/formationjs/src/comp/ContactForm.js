import React from 'react';

const style = {
    errroInput: {
        border: "1px solid red"
    }
}

class ContactForm extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            inputVal :"",
            errorMsg :"",
            gender:[
                { title:"M", id:"1" },
                { title:"F", id:"2" },
                
            ],
            selectValue:"2"

        }


        this.hundleChange = this.hundleChange.bind(this);
        this.hundleChangeSelect = this.hundleChangeSelect.bind(this);

    }


    hundleChange(e){
        const val = e.target.value;

        if (val === "") {
            this.setState({
                inputVal:e.target.value,
                errorMsg:"Feild is required"
            })
        }else{
            this.setState({
                inputVal:e.target.value,
                errorMsg:""
            })
        }
    }

    hundleChangeSelect(e){
        console.log(e.target.value);
        this.setState({
            selectValue:e.target.value
        })
    }

    render(){

        return(
            <div>
                <form>

                    <input style= {  this.state.inputVal === "" ? style.errroInput : null            }  onChange={ this.hundleChange } value={this.state.inputVal} placeholder="type something" />
                    {
                        this.state.inputVal === "" ? <p style={{color:"red"}}>{this.state.errorMsg}</p> : <div></div>
                    }

                    <br/>

                    <select value={this.state.selectValue} onChange={ this.hundleChangeSelect }>
                        {
                            this.state.gender.map((g)=>{
                                return <option value={g.id} key={g.id} > {g.title} </option>
                            })
                        }
                    </select>
                
                
                </form>
            </div>
        );
    }
}

export default ContactForm;