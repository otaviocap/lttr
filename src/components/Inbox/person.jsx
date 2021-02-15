import React from 'react'
import styles from '../../styles/person.module.css'

export default class Person extends React.Component {


	render() {
		return(
			<div className={styles.container} style={{backgroundColor: this.props.color}} onClick={this.props.onClick}>
				<p>{this.props.children}</p>
				{!this.props.badge ? null : 
					<span className={styles.badge} /> 
				}
			</div>
		)
	}
}