import styles from "./CalBtn.module.css";
const Calbtn = ({ onButtonClick }) => {
  const buttonsNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "x",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonsNames.map((buttonsNames) => (
        <button
          className={styles.calBtn}
          onClick={() => onButtonClick(buttonsNames)}
        >
          {buttonsNames}
        </button>
      ))}
    </div>
  );
};

export default Calbtn;
