import React from 'react'
import styles from '../../styles/inbox.module.css'

export default class Person extends React.Component {


	render() {
		return(
			<div className={styles.container} style={{backgroundColor: this.props.color}}>
				{this.props.children}
			</div>
		)
	}
}