import './index.css'
const HistoryContent =(props)=>{
    const {eachListItem,deleteItem}=props
    const {timeAccessed,logoUrl,title,domainUrl,id}=eachListItem
    const myfun=()=>{
        deleteItem(id)
    }
    return(
        <li className="list-item">
        <div className="list-content">
            <div className="left-part">
                <p className="his-time">{timeAccessed}</p>
                <img  className="his-img" src={logoUrl} alt="domain logo" />
                <p className="his-title">{title}</p>
                <p className="his-url">{domainUrl}</p>
            </div>
            <div className=" right-part">
                <button data-testid="delete" className="delete-btn" onClick={myfun}><img src="https://assets.ccbp.in/frontend/react-js/delete-img.png" alt="delete" /></button>
            </div>
        </div>

     </li>
    )
}
export default HistoryContent