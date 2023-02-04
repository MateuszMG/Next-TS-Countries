import Link from "next/link";
import style from "./Home.module.css";

export const Home = () => {
  return (
    <div className={style.container}>
      <Link className={style.link} href={"/countries"}>
        Countries
      </Link>
      <Link className={style.link} href={"/profile"}>
        Profile
      </Link>
    </div>
  );
};
