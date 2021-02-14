import Person from './person'
import React from 'react'

export default class Inbox extends React.Component {

	render() {
		return(
			<div className="column inbox">
				<Person color={"rgba(0,0,0,1)"}>
					<span class="material-icons-outlined">email</span>
				</Person>
				<Person color={"red"}>A</Person>
				<Person color={"blue"}>B</Person>
				<Person color={"green"}>C</Person>
				<Person color={"firebrick"}>D</Person>
				<Person color={"teal"}>E</Person>
				<Person color={"pink"}>F</Person>
			</div>
		)
	}
}