'use client'
import IconArrowDown from '@/shared/ui/icons/icon-arrow/IconArrowDown'
import IconUpdate from '@/shared/ui/icons/icon-update/IconUpdate'
import { useState } from 'react'
import styles from './styles.module.scss'

const Messenger = () => {
	const [activeButton, setActiveButton] = useState('primary')

	const handleButtonClick = (buttonName: string) => {
		setActiveButton(buttonName)
	}
	return (
		<div className={styles.block}>
			<div className={styles.block__left}>
				<div className={styles.block__left_top}>
					<form className={styles.block__form}>
						<select
							name='update__list'
							id='update__list'
							className={styles.block__select_top}
						>
							<option value='upvox'>upvox_</option>
							<option value='upvox1'>upvox_1</option>
							<option value='upvox2'>upvox_2</option>
						</select>
						<label htmlFor='update__list' className={styles.block__input}>
							<IconArrowDown />
						</label>
					</form>

					<button className={`btn-reset ${styles.block__btn_update}`}>
						<IconUpdate />
					</button>
				</div>
				<div className={styles.block__left_actions}>
					<button
						className={`btn-reset ${styles.block__btn_actions} ${
							activeButton === 'primary' ? styles.block__btn_actions_active : ''
						}`}
						onClick={() => handleButtonClick('primary')}
					>
						Primary
					</button>
					<button
						className={`btn-reset ${styles.block__btn_actions} ${
							activeButton === 'general' ? styles.block__btn_actions_active : ''
						}`}
						onClick={() => handleButtonClick('general')}
					>
						General
					</button>
				</div>
				<div className={styles.block__left_users}></div>
			</div>
			<div className={styles.block__right}>
				<div className={styles.block__right_top}></div>
			</div>
		</div>
	)
}

export default Messenger
