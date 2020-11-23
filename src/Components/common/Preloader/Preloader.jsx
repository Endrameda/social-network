import preloader from "../../../assets/img/icons/prloader.svg";
import React from "react";
import styles from "./Preloader.module.scss";

const Preloader = (props) => {
	return <div className={styles.preloaderWrapper}>
		<img className={styles.preloader} src={preloader}/>
	</div>
}

export default Preloader