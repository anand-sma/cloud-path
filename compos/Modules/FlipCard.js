import styles from '../../styles/FlipCard.module.scss';

const FlipCard = ({ title, subtitle, text }) => {
  return (
    <div className={`${styles.primary_2d_card} flip_card`}>
      <div className={`${styles.flip_card_inner}`}>
        <div className={`${styles.flip_card_front} bt`}>
          <h1>{title}</h1>
        </div>
        <div className={`${styles.flip_card_back} bt`}>
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
