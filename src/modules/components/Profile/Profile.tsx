import { Loading } from "../Loading/Loading";
import { NoCountry } from "../NoCountry/NoCountry";
import { useGetCountryQuery } from "@/generated/graphql";
import Link from "next/link";
import style from "./Profile.module.css";

export const Profile = () => {
  const { data, loading } = useGetCountryQuery({ variables: { code: "PL" } });

  if (loading) return <Loading />;
  if (!data?.country) return <NoCountry />;

  const { code, name } = data?.country;

  return (
    <div className={style.container}>
      <h1>
        {name} ({code})
      </h1>
      <Link className={style.link} href={`/countries/${code}`}>
        Show more
      </Link>
    </div>
  );
};
