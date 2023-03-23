import { Component } from "react";
import HistoryContent from "../HistoryContent";
import './index.css'

class History extends Component{

   
    
    state={
        inputString:"",
        updatedHistoryList:[]

    }

    componentDidMount(){
        const {initialHistoryList} = this.props
        this.setState({updatedHistoryList:initialHistoryList})

    }
    

    searchingStarted=(event)=>{
        const {initialHistoryList} =this.props 
        const newHistoryList= initialHistoryList.filter(eachListItem=>eachListItem.title.toLowerCase().includes(event.target.value.toLowerCase())) 
        this.setState({inputString:event.target.value,updatedHistoryList:newHistoryList})

    }
    deleteItem=(id)=>{
        console.log(id)
        const {updatedHistoryList} = this.state
        const afterdelete =updatedHistoryList.filter(eachItem=>(eachItem.id!==id)) 
        this.setState({updatedHistoryList:afterdelete})
    }

    render(){
        const {updatedHistoryList} = this.state
        
        return(
            <>
                <nav className="nav-bar">
                    <img className="logo" src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png" alt="app logo" />
                    <div className="search-input-btn">
                        <button className="search-btn"><img src="https://assets.ccbp.in/frontend/react-js/search-img.png" alt="search" /></button>
                        <input className="search-input" type="search" name="" id="" placeholder="Search history" onChange={this.searchingStarted} />
                    </div>
                </nav>
            
                <div className="background-col">
                    <div className={(updatedHistoryList.length>0)?"displaynone":"emptybgcolor"}>
                        <p className="parastyle">There is no history to show</p>
                    </div>
                    <ul className={(updatedHistoryList.length>0)?"list-card":"displaynone"}>
                        
                        {updatedHistoryList.map(eachListItem=><HistoryContent deleteItem={this.deleteItem} key={eachListItem.id} eachListItem={eachListItem}/>)}
                         
                    </ul>
                </div>
            </>
        )
    }
}
export default History