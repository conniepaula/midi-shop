import { FC } from "react";

interface pageProps {
  params: { id: string };
}

const page: FC<pageProps> = ({ params }) => {
  return <div>hello {params.id}</div>;
};

export default page;
