import { GetCountryDocument } from "@/generated/graphql";
import { initializeApollo } from "@/lib/apolloClient";
import { Profile } from "@/modules/components/Profile/Profile";

export async function getStaticProps(context: any) {
  const apolloClient = initializeApollo(context);

  await apolloClient.query({
    query: GetCountryDocument,
    variables: { code: "PL" },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default function ProfilePage() {
  return <Profile />;
}
