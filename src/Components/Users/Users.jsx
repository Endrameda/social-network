import React from 'react';
import styles from "./users.module.scss";
import userPhoto from "../../assets/img/icons/User avatar.svg";


const Users = (props) => {
	let pagesCount = Math.ceil(props.totalCount / props.pageSize);
	let pages = [];

	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	return (
		<div className={styles.usersList}>
			{
				props.users.map(user => <div key={user.id} className={styles.item}>
					<div className={styles.itemLeft}>
						<div className={styles.imageWrapper}>
							<img src={
								user.photos.small !== null
									? user.photos.small
									: userPhoto} alt={user.name}/>
						</div>
						{user.followed
							? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
							: <button onClick={() => props.follow(user.id)}>Follow</button>}
					</div>
					<div className={styles.itemRight}>
						<div className={styles.userInfo}>
							<span className={styles.fullName}>{user.name}</span>
							{user.status !== null
								? <span className={styles.status}>{user.status}</span>
								: ''}

						</div>
						<div className={styles.location}>
							<span className={styles.locationCountry}>Страна: {"user.location.country"}</span>
							<span className={styles.locationCity}>Город: {"user.location.city"}</span>
						</div>
					</div>
				</div>)
			}
			<div className={styles.pagination}>
				{pages.map(page => {
					return <span key={page} className={props.currentPage === page
						? `${styles.paginationItem} ${styles.paginationItemSelected}`
						: `${styles.paginationItem}`}
								 onClick={() => props.onPageChanged(page)}
					>
						{page}
					</span>
				})}
			</div>
		</div>
	)
}

export default Users;