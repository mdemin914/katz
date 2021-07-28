import React from "react";
import { Loader } from "../components/generic/Loader";
import { useFetchCats } from "../utils/queries/useFetchCats";
import { Cats } from "../components/cats/Cats";
import { Page } from "../components/generic/Page";

/**
 * The index page.
 */
const Index = () => {
  const { isLoading, data, error } = useFetchCats();

  return (
    <Page>
      {isLoading && <Loader />}
      {error && JSON.stringify(error)}
      <Cats cats={data} />
    </Page>
  );
};

export default Index;
