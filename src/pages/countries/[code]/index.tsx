import { Country, CountryProps } from "@/modules/components/Country/Country";
import { GetCountryDocument, GetCountryQuery } from "@/generated/graphql";
import request from "graphql-request";

interface Context {
  params: { code: string };
}

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [],
  };
}

export async function getStaticProps(context: Context) {
  const res: GetCountryQuery = await request(
    "https://countries.trevorblades.com",
    GetCountryDocument,
    { code: context.params.code }
  );

  return {
    props: {
      country: res.country,
    } as CountryProps,
  };
}

export default function CountryPage(props: CountryProps) {
  return <Country {...props} />;
}
