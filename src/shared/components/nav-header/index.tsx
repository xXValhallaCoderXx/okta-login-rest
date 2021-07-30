import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const NavHeader = () => {
  return (
    <div className={styles.container}>
      <Link to="/profile/view">Profile View</Link>
      <Link to="/profile/edit">Profile Edit</Link>
    </div>
  );
};

export default NavHeader;
