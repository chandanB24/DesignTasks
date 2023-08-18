import React, { useState } from 'react'

const HighlightingCard = () => {

    const data = [
        {
            id:1,
            header:"Post-1",
            title:"Best Highlighting card",
            description:"Embark on a journey to discover hidden gems and breathtaking landscapes, as we take you off the beaten path to experience the world's most captivating destinations",
            updated:"6 min ago"
        },
        {
            id:2,
            header:"Post-2",
            title:"One of Best Highlighting",
            description:"Embark on a journey to discover hidden gems and breathtaking landscapes, as we take you off the beaten path to experience the world's most captivating destinations",
            updated:"11 min ago"
        },
        {
            id:3,
            header:"Post-3",
            title:"Card Designs",
            description:"Embark on a journey to discover hidden gems and breathtaking landscapes, as we take you off the beaten path to experience the world's most captivating destinations",
            updated:"14 min ago"
        },
        {
            id:4,
            header:"Post-4",
            title:"Good Highlight Component",
            description:"Embark on a journey to discover hidden gems and breathtaking landscapes, as we take you off the beaten path to experience the world's most captivating destinations",
            updated:"15 min ago"
        },
        {
            id:5,
            header:"Post-5",
            title:"Make Highlight",
            description:"Embark on a journey to discover hidden gems and breathtaking landscapes, as we take you off the beaten path to experience the world's most captivating destinations",
            updated:"21 min ago"
        },
    ]


    const [highlightedcards,setHighlightedCards] = useState([]);

    // function to toggle between highlight
    const handleHighlightToggle = (cardId)=>{
        if(highlightedcards.includes(cardId)){
            setHighlightedCards(highlightedcards.filter(id=>id!==cardId));
        }
        else{
            setHighlightedCards([...highlightedcards,cardId]);
        }
    }

    const isHiglighted = (cardId)=>{
        return highlightedcards.includes(cardId);
    }


  return (
    <div className='p-4'>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 p-4">
            { data.map((item)=>(
            <div className='col' >
                <div className={`card ${isHiglighted(item.id)?'bg-dark text-white':'bg-light text-dark'} mb-3`} key={item.id} style={{transition:'0.3s ease-in-out'}}>
                    <div className="card-header d-flex justify-content-between">
                        <h5>{item.header}</h5>
                        <button className='btn btn-primary btn-sm' onClick={()=>handleHighlightToggle(item.id)}>
                           {isHiglighted(item.id)?'remove':'Highlight'}
                        </button>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text fs-6">{item.description}</p>
                    </div>
                    <div className="card-footer">
                        <p className='card-text fs-6'>Last updated: {item.updated}</p>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default HighlightingCard