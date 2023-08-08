/* eslint-disable react/prop-types */
import MyCard from "../../Card";
import { Typography } from "@mui/material";
export default function Trending({ data }) {
  let trendingData = data.dataObj.filter((e) => e.trending);
  return (
    <>
      <section className="trending">
        <div className="container mx-auto">
          <Typography variant="h4" className="text-center ">
            Trending Products
          </Typography>
          <div className="px-4 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {trendingData.map((e) => {
              return <MyCard key={e.id} arr={e} data={data} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
