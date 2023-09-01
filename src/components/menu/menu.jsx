import styles from "./menu.module.css";

const Menu = ({ click }) => {
  console.log("To funcionando");
  return (
    <>
      <div className={styles.fundoMenu} onClick={click}></div>
      <div className={styles.menu}>
        <ul>
          <li>
            <a href="">Terror</a>
          </li>
          <li>
            <a href="">Comédia</a>
          </li>
          <li>
            <a href="">Suspense</a>
          </li>
          <li>
            <a href="">Romance</a>
          </li>
          <li>
            <a href="">Drama</a>
          </li>
          <li>
            <a href="">Ação</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
