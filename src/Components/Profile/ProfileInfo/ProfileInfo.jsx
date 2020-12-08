import styles from './ProfileInfo.module.scss'
import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader/>
	}

	return (
		<div>
			<div className={styles.description}>
				<div className={styles.imageWrapper}>
					<img src={props.profile.photos.large} className={styles.image} alt={props.profile.name}/>
				</div>
				<h1 className="title title_center title_gray">{props.profile.fullName}</h1>
				<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
			</div>
		</div>
	)
}

export default ProfileInfo