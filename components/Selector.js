import React from 'react'

const Selector = React.createClass({

	getInitialState: function() {
		return({
			selectorOpen: false,
		})
	},

	render: function() {
		if(!this.state.selectorOpen) {
			return this.renderHeader()
		}

		return this.renderSelectorOpen()
	},

	renderHeader: function() {
		return(
			<div className="selector" onClick={ () => this.toggleSelector() }>
				Header
			</div>
		);
	},

	renderSelectorOpen: function() {
		return(
			<div>
				{ this.renderHeader() }
				<div className="selector open" onClick={ () => this.toggleSelector() }>
					Open
				</div>
			</div>
		)
	},

	toggleSelector: function() {
		this.setState({
			selectorOpen: !this.state.selectorOpen
		})
	},

})

export default Selector