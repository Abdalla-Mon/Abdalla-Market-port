import AutoPlaySwiper from "../../AutoPlaySwiper";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import CardLoading from "../../CardLoading";
export default function BestSeller({ data }) {
  let bestSeller = data.dataObj.filter((ele) => ele.bestselling === true);

  return (
    <section className="bestseller">
      <div className="container mx-auto">
        <div className="bestselling">
          {data.loading && (
            <>
              <div className="swiper-loading-manager">
                <Stack spacing={1} className="bestselling-text-loading">
                  <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                  <Skeleton variant="text" height={100} />
                  <Skeleton variant="rectangular" height={200} />
                </Stack>
                <div className="skl-manager">
                  {[1, 2, 3].map((e) => (
                    <CardLoading key={e}> </CardLoading>
                  ))}
                </div>
              </div>
            </>
          )}
          {data.loading !== true ? (
            <>
              <div className="bestselling-text">
                <h2>Best Selling</h2>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
                nemo rerum expedita quasi, laboriosam laborum maiores quas
                doloribus repudiandae iure veritatis excepturi cumque suscipit
                fuga perferendis explicabo officia cupiditate! Sint!
                <img
                  className="seller-img"
                  src="https://cdn.pixabay.com/photo/2013/07/13/11/53/best-seller-158885_1280.png"
                  alt="best seller"
                />
              </div>
              <AutoPlaySwiper
                data={data}
                arr={bestSeller}
                spv="1"
                classN="bestselling-swiper  swiper-mob "
                center={false}
              />
              <AutoPlaySwiper
                data={data}
                arr={bestSeller}
                spv="2"
                classN="bestselling-swiper  swiper-lab   "
              />
              <AutoPlaySwiper
                arr={bestSeller}
                data={data}
                spv="3"
                classN="bestselling-swiper  swiper-pc   "
              />
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}
