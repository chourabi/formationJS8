import logo from './logo.svg';
import './App.css';
import React from 'react';
import User from './comp/User';
import LikeBtn from './comp/LikeBtn';
import Article from './comp/Article';
import ContactForm from './comp/ContactForm';

class App extends React.Component {
  
  
  constructor(props){
    super(props);

    this.state = {
      nbrUsers:2,
      arrUsers: [
        { name:"chourabi taher", phone:"+216 93 863 732", email:"tchourabi@gmaol.com" },
        { name:"chourabi taher 2", phone:"+216 93 863 732", email:"tchourabi@gmaol.com" },
        
      ],
      msg:"Loading...",
      date: new Date(),

      articles:[
        { img:"https://www.imgawards.com/wp-content/uploads/2020/04/voteForUs-IMGA-2019-02-330x145.png",  title:"first article", description:" article description", didLike:true, counter:50 },
        { img:"https://www.imgawards.com/wp-content/uploads/2020/04/voteForUs-IMGA-2019-02-330x145.png", title:"second article", description:" article description", didLike:false, counter:0 },
        { img:"https://www.imgawards.com/wp-content/uploads/2020/04/voteForUs-IMGA-2019-02-330x145.png", title:"third article", description:" article description", didLike:true, counter:11 },
        
      ],


      isConnected: true,
      isConfirmed: true



    };

    console.log("constructor");

    this.updateUI = this.updateUI.bind(this);

  }


  componentDidMount(){
    console.log("component did mount");
    this.setState({
      msg:"welcome"
    })
  }

  componentDidUpdate(){
    console.log("component did update");
  }

  componentWillUnmount(){
    console.log("component will unmount");
  }

  componentDidCatch(){
    console.log("compoent did catch");
  }


  updateUI(){
    this.setState({
      date: new Date()
    })
  }


  render (){
    
    let helloMessage;

    if (this.state.isConnected) {
      helloMessage = <h1>welcome</h1>
    }else{
      helloMessage = <h1>you should sign in first</h1>
    }



    return(    
    <div>
     
      {/* <h1> {this.state.date.toISOString()}  </h1>
      
        this.state.arrUsers.map((user)=>{
          return <User name={user.name} phone={user.phone} email={user.email} />;
        })
        
        <button onClick={ this.updateUI } > update UI </button>
        */
      }


      <ul>
        {
          /*this.state.articles.map((article)=>{
            return <Article key={article.title} params={article} />
          })*/
        }
      </ul>


      { 
        this.state.isConnected ?
          <h1>
            Welcome
            {
              this.state.isConfirmed ?
              <div></div>:
              <h3>You should verify your account</h3>
            }
          </h1>
        :
          <h1>You should sign in</h1>

      }


      <ContactForm />


      


    </div>
    
    
    
    );
  }
}

export default App;
