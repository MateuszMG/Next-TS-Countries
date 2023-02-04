import { Country as CountryType } from "@/generated/graphql";
import { Loading } from "../Loading/Loading";
import { NoCountry } from "../NoCountry/NoCountry";
import { useRouter } from "next/router";
import style from "./Country.module.css";

export interface CountryProps {
  country?: Pick<CountryType, "code" | "name" | "languages" | "emoji">;
}

export const Country = ({ country }: CountryProps) => {
  if (useRouter().isFallback) return <Loading />;
  if (!country) return <NoCountry />;

  const { code, emoji, languages, name } = country;

  return (
    <div className={style.container}>
      <h1>{name}</h1>
      <div className={style.emoji}> {emoji} </div>
      <h3> Code: {code}</h3>
      <div>
        <h3>Languages:</h3>
        <ul className={style.list}>
          {languages.map(({ name }: any) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
