import React from 'react'

export default function Buscar() {
    return (
        <div>
             <div className='center' >
                <button className="waves-effect waves-light btn " style={{marginRight: '5px'}}> + </button>
                <input type='text' style={{width: '75px', marginRight: '10px'}} placeholder='Mês' ></input>
                <input type='text' style={{width: '75px', marginRight: '5px'}} placeholder='Ano'></input>
                <button className="waves-effect waves-light btn" >-</button>
            </div>
        </div>
    )
}
