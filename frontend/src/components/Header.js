import React from 'react'

export default function Header(props){
    return (
        <header className='row block center'>
            <div>
               <a href='#/'>
                <h1>small shopping cart</h1>
            </a> 
            </div>
            <div>
                <a href='#/'>cart</a> <a href='#/'>signin</a>
            </div>
            
        </header>
    )
}