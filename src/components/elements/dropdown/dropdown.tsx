import { Link } from "react-router-dom";
import { DropdownLink } from "../../../types/dropdownLink";
import styles from "./dropdown.module.css";

type Props = {
  label: string;
  links: DropdownLink[];
  isHeader: boolean;
  headerBackground: string;
};

export const Dropdown: React.FunctionComponent<Props> = ({
  label,
  links,
  isHeader,
  headerBackground,
}) => {
  return (
    <div
      className={`${styles.dropdown} ${
        isHeader ? styles[headerBackground] : ""
      }`}
    >
      <button className={styles.dropdownButton}>{label}</button>
      <div className={styles.dropdownContent}>
        {links.map((link, index) => {
          return (
            <Link key={index} className={styles.link} to={link.href}>
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
