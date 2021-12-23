import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap'

const Examples = ({title,cards})=> {
    console.log(cards)
        return (
            <div>

                <div style={{textAlign: 'center'}}>
                    <h2>{title}</h2>
                </div>
                <div className='container'>
                    <div className='row justify-content-center'>
                        {
                            cards.map(card => {
                                return(
                                   card.href?
                                   <a href={card.href} target='_blank'>
                                        <div class="col-md card shadow-sm m-2">
                                            <img src={card.img} width="100%" height="225" className='card-img-top' />
                                            <div class="card-body">
                                                <p class="card-text"> {card.title}</p>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <small class="text-muted">{card.description}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    :
                                    <div class="col-md card shadow-sm m-2">
                                        <img src={card.img} width="100%" height="225" className='card-img-top' />
                                        <div class="card-body">
                                            <p class="card-text"> {card.title}</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <small class="text-muted">{card.description}</small>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                       
                    </div>
                </div>
               
            </div>
        )
}

export default Examples