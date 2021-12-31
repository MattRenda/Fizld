import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap'

const Examples = ({ title, description, cards }) => {
    console.log(cards)
    return (
        <div className='pt-5 pb-5'>
            <div style={{position:'relative', zIndex:'2', textAlign: 'center'}}>
                <h2>{title}</h2>
                <p className='mb-0'>{description}</p>
            </div>
            <div className='container'>
                <div className='row justify-content-center'>
                    {
                        cards.map(card => {
                            return (
                                card.href ?

                                    <div style={{padding:'0px'}} class="col-lg card shadow-sm m-2">
                                        <a href={card.href} target='_blank'>
                                            <img src={card.img} width="100%" height="225" className='card-img-top' />
                                            <div class="card-body">
                                                <p class="card-text"> {card.title}</p>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <small class="text-muted">{card.description}</small>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                    :
                                    <div style={{padding:'0px'}} class="col-lg card shadow-sm m-2">
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