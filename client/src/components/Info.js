import React from 'react'

export default function Info() {
    return (
        <div>
             <div style={{display: 'flex', direction: 'row'}} >
                <div style={{marginLeft:'50px',marginRight: '350px',display: 'flex', direction: 'row'}}>
                    <p>Lançamentos:</p>
                    <p>87</p>
                </div>
                <div style={{marginRight: '350px',display: 'flex', direction: 'row'}}>
                    <p>Receitas:</p>
                    <p>87</p>
                </div>
                <div style={{marginRight: '350px',display: 'flex', direction: 'row'}}>
                    <p>Despesas:</p>
                    <p>87</p>
                </div >
                <div style={{display: 'flex', direction: 'row'}}>
                    <p>Saldo:</p> 
                    <p>87</p>
                </div>
            </div>
        </div>
    )
}
