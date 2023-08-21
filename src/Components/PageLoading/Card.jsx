import React from 'react'

const Card = ({curData}) => {

    const {title,body,id}=curData;
  return (
    <div className="col">
        <div class="card  mb-3 shadow-sm h-100" style={{backgroundColor:"#ffffff"}}>
        <div class="card-header"  style={{backgroundColor:"#ffffff"}}>{id}</div>
        <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{body}</p>
        </div>
        </div>
    </div>
  )
}

export default Card