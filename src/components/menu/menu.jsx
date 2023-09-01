import styles from "./menu.module.css";

const Menu = ({ click }) => {
  console.log("To funcionando");
  return (
    <div className={styles.clicaFora} onClick={click}>
      <div className={styles.menu}>
        <ul onClick={(e) => e.stopPropagation}>
          <li>
            <a href="">Bandoleiro 1</a>
          </li>
          <li>
            <a href="">Bandoleiro 2</a>
          </li>
          <li>
            <a href="">Bandoleiro 3</a>
          </li>
          <li>
            <a href="">Bandoleiro 4</a>
          </li>
          <li>
            <a href="">Bandoleiro 5</a>
          </li>
          <li>
            <a href="">Bandoleiro 6</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;