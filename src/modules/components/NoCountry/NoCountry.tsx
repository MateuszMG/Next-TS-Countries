import Link from "next/link";
import style from "./NoCountry.module.css";

export const NoCountry = () => {
  return (
    <div className={style.container}>
      <p className={style.text}>The country doesn't exist</p>
      <Link className={style.link} href={"/countries"}>
        Go to countries
      </Link>
    </div>
  );
};
