import React from 'react'
import Letter from './letter'
import styles from '../../styles/letters.module.css'

export default class Letters extends React.Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return(
			<div className="column letters">
				<p className={styles.title}>Inbox</p>
					<Letter type="sended">Hi, how are you?</Letter>
					<Letter type="recieved">Fine and you?</Letter>
					<Letter type="sended">Kkkkk</Letter>
					<Letter type="recieved">Shasuhuhas</Letter>
				<div>
				</div>
				<div className={styles.answer}>
					<p>Answer</p>
				</div>
			</div>
		);
	}


} 