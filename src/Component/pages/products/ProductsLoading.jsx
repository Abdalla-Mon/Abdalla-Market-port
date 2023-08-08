import { Skeleton, Stack } from "@mui/material";
import CardLoading from "../../CardLoading";

export default function ProductsLoading() {
  let arr = [1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <>
      <section className="products">
        <div className="container mx-auto">
          <div className="sm:flex">
            <Stack className="filter-loader" style={{ flex: "1" }}>
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              <Skeleton variant="text" height={100} />{" "}
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              <Skeleton variant="text" height={100} />{" "}
            </Stack>
            <div className="products-area-loader p-5" style={{ flex: "3" }}>
              <Stack className="tabs-loader">
                <Skeleton variant="text" className="m-2 " />{" "}
                <Skeleton variant="text" className="m-2" />{" "}
                <Skeleton variant="text" className="m-2" />{" "}
                <Skeleton variant="text" className="m-2" />{" "}
              </Stack>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                {arr.map((e, index) => {
                  return <CardLoading key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
