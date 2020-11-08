import Axios from 'axios';
import React , {Component} from 'react';
import './App.css';
import Movieitem from './Movieitem';
// import logo from './assets/logo.svg';

class App extends Component{

    constructor(props){
        super(props)
        this.state = { rows: [
            // {title: "lek" },
            // {title: "kan" }
    ]}

    }

    componentDidMount(){
        this.search('her');
    }

    search = (keyword)=>{
        // console.log(keyword)
        var dataArray = []
        var url = 'https://api.themoviedb.org/3/search/movie?api_key=978f3037562621f5e9d701c2f84e8c09&query='+keyword;
        Axios.get(url).then(result=>{
          
            console.log(JSON.stringify(result.data.results))  
            result.data.results.forEach(item=>{
                item.poster_src = "https://image.tmdb.org/t/p/w185"+item.poster_path;
                dataArray.push(item)
            })
            this.setState({rows:dataArray});
        })
    }

    render(){
        const title ="CondCodeMobilese";
        const img = require('./assets/logo.svg').default;
        return(
            <div style={{textAlign:'center'}}>
                {/* JSX */}
                {/* <strong>{title}</strong> */}
                {/* <table style={ {backgroundColor:'#333',color:'white', display:'block'} }> */}
                <table className="NavBar">
                    <tbody>
                        <tr>
                            <td>
                                <img src={img} width="50"/>
                                {/* <img src={logo} width="50"/> */}
                            </td>
                            <td>
                                Test React Api
                            </td>
                        </tr>
                    </tbody>
                </table>
                <input style={{ fontsize:24,display:'block',width:'100%' , paddingLeft:8 }} 
                placeholder="Enter your movie keyword" 
                onChange={(event)=>{ this.search(event.target.value) }}/>
                
                { this.state.rows.map( item => (
                    // <div>
                    //   <strong>{ item.title }</strong>
                    // </div>
                    <Movieitem movie={item} />
                )) }
              
    
            </div>
    
      
        );
    }
}

export default App;
