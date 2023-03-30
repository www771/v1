import styles from "./index.module.scss";
import img1 from "../../../../assets/news/1.jpg";
import img2 from "../../../../assets/news/2.jpg";
import img3 from "../../../../assets/news/3.jpg";

const NewsSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <img src={img1} />
      </div>

      <div className={styles.card}>
        <img src={img2} />
      </div>

      <div className={styles.card}>
        <img src={img3} />
      </div>
    </div>
  );
};

export default NewsSection;
