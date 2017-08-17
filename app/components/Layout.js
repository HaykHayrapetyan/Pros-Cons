import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TextField from 'material-ui/TextField';

import change from '../actions/test.action';
import Pros from './ProsCons/Pros'
import Cons from './ProsCons/Cons'

const mapStateToProps = ({ test }) => {
	return { test };
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		change
	}, dispatch);
}

class Layout extends PureComponent {
	render() {
		return (
			<div id="div">
				<div id="table">
					<div id="question"><p>Should I eat McDonalds?</p></div>
					<div id="HProsCons">
						<div id="HPros">Pros</div>
						<div id="HCons">Cons</div>						
					</div>

					<div id="ProsCons">
						<div id="Pros">
							<Pros />
						</div>
						<div id="Cons">
							<Cons />	
						</div>		
					</div>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);