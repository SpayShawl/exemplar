import { debounce } from "lodash";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import dropLinks from "./../../../assets/datas/links.json";
import { Dropdown } from "../../elements/dropdown/dropdown";
import { DropdownLink } from "../../../types/dropdownLink";

export const Header: React.FunctionComponent = () => {
  const [status, setStatus] = useState("visible");
  const [background, setBackground] = useState("transparent");
  const [loaded, setLoaded] = useState(false);

  const scrollRef = useRef(0);

  const links: { [key: string]: DropdownLink[] } = dropLinks;

  const toggleHeader = useCallback(() => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      setStatus("visible");
      setBackground("transparent");
    } else if (currentScroll > scrollRef.current) {
      setStatus("hidden");
    } else if (currentScroll < scrollRef.current) {
      setStatus("visible");
      setBackground("filled");
    }
    scrollRef.current = currentScroll;
  }, []);

  useEffect(() => {
    if (!loaded) {
      window.addEventListener(
        "scroll",
        debounce(toggleHeader, 100, { leading: true })
      );
      setLoaded(true);
    }
  }, [loaded, toggleHeader]);

  return (
    <header
      className={`${styles.header} ${styles[status]} ${styles[background]}`}
    >
      <nav className={styles.nav}>
        <Link to={"/"} className={styles.link}>
          <h1>Cognomen</h1>
        </Link>
        <div>
          {Object.keys(links).map((key, index) => {
            return (
              <Dropdown
                key={index}
                label={key}
                links={links[key]}
                isHeader={true}
                headerBackground={background}
              ></Dropdown>
            );
          })}
        </div>
      </nav>
    </header>
  );
};
