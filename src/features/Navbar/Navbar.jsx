import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import ToggleTheme from "../ToggleTheme/ToggleTheme.jsx";
import { ThemeContext, themes } from "../../context/ThemeContext.js";
import Web3 from "web3";

const Navbar = () => {
  const [wallet, setWallet] = useState("");
  const [balance, setBalance] = useState("");

  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    getCurrentWallet();
    addWalletListener();
  }, []);

  async function getBalance() {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      const address = await web3.eth
        .getAccounts()
        .then((accounts) => accounts[0]);
      const balanceInWei = await web3.eth.getBalance(address);
      const balanceInEther = web3.utils.fromWei(balanceInWei, "ether");
      setBalance(`${balanceInEther} ETH`);
    }
  }

  const handleLanguage = () => {
    if (language === "en") {
      setLanguage("ru");
      i18n.changeLanguage("ru");
    } else {
      setLanguage("en");
      i18n.changeLanguage("en");
    }
  };

  const getCurrentWallet = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length > 0) {
        setWallet(accounts[0]);
        getBalance();
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWallet(accounts[0]);
        getBalance();
      });
    } else {
      setWallet("");
    }
  };

  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWallet(accounts[0]);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      // install
    }
  };

  const ignore = () => {};

  return (
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <h2>P2Dex</h2>
          </div>

          <div className={styles.nav}>
            <ul>
              <li>
                <Link to="/">{t("navbar.home")}</Link>
              </li>
              <li>
                <Link to="/stake">{t("navbar.stacking")}</Link>
              </li>
              <li>
                <Link to="/p2p">{t("navbar.p2p")}</Link>
              </li>
              <li>
                <Link to="/qr-code">{t("navbar.qr")}</Link>
              </li>
              <li>
                <Link to="/faq">{t("navbar.faq")}</Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className={styles.connect}>
            <button onClick={handleLanguage} className={styles.lng}>
              {language === "en" ? "English" : "Русский"}
            </button>
            <ThemeContext.Consumer>
              {({ theme, setTheme }) => (
                <ToggleTheme
                  onChange={() => {
                    if (theme === themes.light) setTheme(themes.dark);
                    if (theme === themes.dark) setTheme(themes.light);
                  }}
                  value={theme === themes.dark}
                />
              )}
            </ThemeContext.Consumer>
            {wallet && wallet.length > 0 && (
              <div className={styles.user}>
                <div className={styles.balance}>
                  <p>{balance.substring(0, 5)} ETH</p>
                </div>
              </div>
            )}
            <motion.button
              onClick={wallet && wallet.length > 0 ? ignore : connectWallet}
              className={styles.connect}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              {wallet && wallet.length > 0
                ? `${wallet.substring(0, 6)}...${wallet.substring(38)}`
                : "Connect Wallet"}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
