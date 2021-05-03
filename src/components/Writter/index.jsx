import React from 'react';
import styles from '../../styles/writter.module.css'


export default class Writter extends React.Component {

	render() {
		return (
			<div className="column writter">
				<textarea className={styles.letterWritter}/>
				<div className={styles.bottomBar}>
					<div className={styles.status}>Answering to A.</div>
					<input type="button" value="Send" className={styles.button}/>
				</div>
			</div>
		);	
	}
}