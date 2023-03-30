import styles from "./index.module.scss";
import bnb from "../../../../assets/brands/bnb.svg";
import coin from "../../../../assets/brands/coin.png";
import metamask from "../../../../assets/brands/metamask.svg";
import safe from "../../../../assets/brands/safe.png";
import trust from "../../../../assets/brands/trust.svg";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";

const PartnerSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h1>
          <h1>{t("main.partner_section.header")}</h1>
        </h1>
      </div>

      <div className={styles.link}>
        <Marquee speed={60} gradient={false} style={{ height: "80px" }}>
          <a href="/">
            <img alt="metamask" src={metamask} />
            <h2>MetaMask</h2>
          </a>

          <a href="/">
            <img alt="bnb" src={bnb} />
            <h2>
              BNB <span>Chain</span>
            </h2>
          </a>

          <a href="/">
            <img alt="coin" src={coin} />
          </a>

          <a href="/">
            <img alt="trust" src={trust} />
            <h2>Trust Wallet</h2>
          </a>

          <a href="/">
            <img alt="safe" style={{ fill: "#fff" }} src={safe} />
            <h2>SafePal </h2>
          </a>
        </Marquee>
      </div>
    </div>
  );
};

export default PartnerSection;
