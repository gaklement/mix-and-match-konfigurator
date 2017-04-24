import React from 'react'

const Shirt = React.createClass({
	
	render: function() {

		const { shirt } = this.props

		return(
			<div>
				<img className="clothes" src={ shirt } />
			</div>
		)
	}
})

export default Shirt