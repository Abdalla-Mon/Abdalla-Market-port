import BestSeller from "./BestSeller";
import Customers from "./Customers";
import Features from "./Features";
import Landing from "./Landing";
import Offers from "./Offers";
import Trending from "./Trending";

export default function Home({ data }) {
  return (
    <>
      <Landing />
      <Features />
      <BestSeller data={data} />
      <Offers />
      <Trending data={data} />
      <Customers />
    </>
  );
}
