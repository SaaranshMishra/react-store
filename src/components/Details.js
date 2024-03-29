import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button.js';

export default class Details extends Component {
	render() {
		return (
			<ProductConsumer>
				{value => {
					const {id, company, img, info, price, title, inCart} = value.detailProduct;
					return (
						<div className="container py-5">
							{/*Title*/}
							<div className="row">
								<div className="col-10 mx-auto text-center text-slanted text-blue my-5">
									<h1>{title}</h1>
								</div>
							</div>
							{/*Products Info*/}
							<div className="row">
								<div className="col-10 mx-auto col-md-6 my-3">
									<img src={img} alt="Product" className="img-fluid" />
								</div>
								<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
									<h1>Model: {title}</h1>
									<h4 className="text-title text-uppercase text-muted mt-3 mb-2">Made by: <span className="text-uppercase">{company}</span></h4>
									<h4 className="text-blue">
										<strong>
											price: <span>$ {price}</span>
										</strong>
									</h4>
									<p className="text-capitalize font-weight-bold mt-3 mb-0">
										product info:
									</p>
									<p className="text-muted lead">{info}</p>
									<div>
										<Link to='/'>
										<ButtonContainer>
											Back to products
										</ButtonContainer>
										<ButtonContainer 
										disabled={inCart ? true : false}
										onClick={() => {
											value.addToCart(id);
											value.openModal(id);
										}}
										cart>
											{inCart ? 'In Cart' : 'Add to Cart'}
										</ButtonContainer>
										</Link>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</ProductConsumer>
		)
	}
}