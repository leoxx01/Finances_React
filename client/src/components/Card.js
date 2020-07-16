import React,{useState,useEffect} from 'react'

export default function Card(props) {
    const {data} = props
    const dados = [{data}]

    dados.toString()
    
   
    return (    
        
        <div>
            {dados.forEach(dado=>{
                return( <div style={{marginRight: '400px'}}>
                    <p></p>
                    <p>{dado.type}</p>
                    {console.log(dado.data.category)}
                </div>)
            })}
             <div style={{display: 'flex', direction: 'row', marginTop: '25px', borderRadius: '15px'}}>
                <p style={{marginLeft: '15px',marginRight: '400px', marginTop: '30px'}}><strong>01</strong></p>
                <div style={{marginRight: '400px'} }>
                    <p></p>
                    <p>element.description</p>
                </div>

            <p style={{marginRight: '400px',marginTop: '30px'}}>element.valu</p>

                <div style={{marginTop: '30px'}}>
                    <button ><img style={{width: '25px25px',height: '25px'}} src='data:image/png;base64,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'/></button>
                    <button ><img style={{width: '25px',height: '25px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL4Z_hhRKKFMm3cM9h5vvGiXAQ9JEur6jIh6on-ltp-Z9BfmRf&s'/></button>
                </div>
            </div>
        </div>
    )
}
