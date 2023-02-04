import { GetCountriesDocument, GetCountriesQuery } from "@/generated/graphql";
import request from "graphql-request";
import {
  Countries,
  CountriesProps,
} from "@/modules/components/Countries/Countries";

export async function getStaticProps() {
  const res: GetCountriesQuery = await request(
    "https://countries.trevorblades.com",
    GetCountriesDocument
  );

  return {
    props: {
      countries: res.countries,
    } as CountriesProps,
  };
}

export default function CountriesPage(props: CountriesProps) {
  return <Countries {...props} />;
}
