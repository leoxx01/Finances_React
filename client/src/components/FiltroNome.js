import React from 'react'

export default function FiltroNome() {
    return (
        <div>
              <div style={{display: 'flex', direction: 'row'}}>
                <button className="waves-effect waves-light btn" style={{marginLeft:'48px',marginRight: '15px',marginTop: '25px'}}>+ Novo Lançamento</button>
                <input type='text' style={{marginTop: '16px'}}></input>
            </div>
        </div>
    )
}
