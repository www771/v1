import { ReactComponent as SunIcon } from "../../assets/navbar/sun.svg";
import { ReactComponent as MoonIcon } from "../../assets/navbar/moon.svg";
import styles from "./index.module.scss";
import { motion } from "framer-motion";

const ToggleTheme = ({ value, onChange }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.09 }}
      whileTap={{ scale: 0.9 }}
      type="checkbox"
      onClick={onChange}
      className={styles.btn}
    >
      {value ? (
        <SunIcon className={styles.svg} />
      ) : (
        <MoonIcon className={styles.svg} />
      )}
    </motion.button>
  );
};

export default ToggleTheme;
