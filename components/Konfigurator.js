import React from 'react'

import Suit from './Suit'
import Shirt from './Shirt'
import Selector from './Selector'


const Konfigurator = React.createClass({
	
	getInitialState: function() {
		return({
			selectedSuit: null,
			selectedShirt: null,
		})
	},

	render: function() {
		return(
			<div>
				<h2 className="headline">STYLE YOUR OUTFIT</h2>
				<div className="canvas">
					{ this.state.selectedSuit && this.getSuit() }
					{ this.state.selectedShirt && this.getShirt() }
					<Selector/>
				</div>
				<div className="col-md-3">
					Auswähler
				</div>

				<div className="container">		 
					<div className="row">
						<div className="col-md-9">
							<div className="preview">
								{ suits.map((suit, key) => (
										<img src={ suit } key={ key } onClick={ (ev) => this.onSelectSuit(ev) }/>
									)
								)}
								
							</div>
						</div>
						<div className="col-md-3">
							<div className="preview">
								{ shirts.map((shirt, key) => (
										<img src={ shirt } key={ key } onClick={ (ev) => this.onSelectShirt(ev) }/>
									)
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		
		)
	},

	getSuit: function() {
		return <img className="clothes" src={ this.state.selectedSuit } /> 
	},

	getShirt: function() {
		return <img className="clothes" src={ this.state.selectedShirt } />
	},

	onSelectSuit: function(ev) {
		this.setState({
			selectedSuit: ev.target.src,
		})
	},

	onSelectShirt: function(ev) {
		this.setState({
			selectedShirt: ev.target.src,
		})
	},

})

const suits = [
		'../imgs/suit_01.png',
		'../imgs/suit_02.png',
		'../imgs/suit_03.png',
		'../imgs/suit_04.png',
]


const shirts = [
		'../imgs/shirt_01.png',
		'../imgs/shirt_02.png',
		'../imgs/shirt_03.png',
		'../imgs/shirt_04.png',
]

export default Konfigurator;
