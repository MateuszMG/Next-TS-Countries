import { Country } from "@/generated/graphql";
import Link from "next/link";
import style from "./Countries.module.css";

export interface CountriesProps {
  countries: Array<Pick<Country, "code" | "name">>;
}

export const Countries = ({ countries }: CountriesProps) => {
  return (
    <div className={style.container}>
      <h1> Countries </h1>
      {countries?.map(({ code, name }) => (
        <Link key={name} href={`/countries/${code}`}>
          {name}
        </Link>
      ))}
    </div>
  );
};
