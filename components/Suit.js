import React from 'react'

const Suit = React.createClass({

	render: function() {

		const { suit } = this.props
		
		return(
			<div>
				<img className="clothes" src={ suit } />
			</div>
		)
	}
})

export default Suit;