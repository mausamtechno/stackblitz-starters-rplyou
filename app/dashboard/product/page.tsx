import FetchPostData from "@/app/components/FetchPostData";
import Product from "@/app/components/Product";
import { fetchData } from "@/app/utils";

import { ResolvingMetadata, Metadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  console.log(searchParams, id, "searchParams, id---> Inside generateMetaData");

  const product = await fetchData({ id: 3 });
  console.log(product, "Inside generateMetadata");

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.title,
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}

const Page = () => {
  return (
    <div>
      <FetchPostData />
      <Product />
    </div>
  );
};

export default Page;
