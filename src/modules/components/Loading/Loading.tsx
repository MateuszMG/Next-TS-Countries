import style from "./Loading.module.css";

export const Loading = () => {
  return (
    <div className={style.container}>
      <p className={style.text}>Loading...</p>
    </div>
  );
};
