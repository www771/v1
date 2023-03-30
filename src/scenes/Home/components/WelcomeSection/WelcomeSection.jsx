import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const WelcomeSection = () => {
  const [stateChange, setStateChange] = useState(true);
  const [stateToken, setStateToken] = useState("BTC");
  const [stateCourse, setStateCourse] = useState("");

  const { t, i18n } = useTranslation();

  return (
    <div className={styles.section}>
      <div className={styles.block}>
        <div className={styles.info}>
          <h1>🔥{t("main.welcome_section.header")}</h1>
          <p>{t("main.welcome_section.description")}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            to="/p2p"
          >
            <Link to="/p2p">{t("main.welcome_section.start")}</Link>
          </motion.button>
        </div>

        <div className={styles.change}></div>
      </div>
    </div>
  );
};

export default WelcomeSection;
