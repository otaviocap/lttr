import React from 'react'
import styles from '../../styles/letter.module.css'


export default class Letter extends React.Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className={styles.container} type={this.props.type}>
				<p>{this.props.children}</p>
			</div>
		)
	}
}