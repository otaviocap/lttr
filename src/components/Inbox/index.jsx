import Person from './person'
import React from 'react'

export default class Inbox extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			checked: false
		}
	}

	render() {
		return(
			<div className="column inbox">
				<Person color={"rgba(0,0,0,1)"} onClick={()=>this.setState({checked: !this.state.checked})}>
					<span className="material-icons-outlined">email</span>
				</Person>
				<Person color={"red"} badge={this.state.checked}>A</Person>
				<Person color={"blue"} badge={this.state.checked}>B</Person>
				<Person color={"green"} badge={this.state.checked}>C</Person>
				<Person color={"firebrick"} badge={this.state.checked}>D</Person>
				<Person color={"teal"} badge={this.state.checked}>E</Person>
				<Person color={"pink"} badge={this.state.checked}>F</Person>
			</div>
		)
	}
}