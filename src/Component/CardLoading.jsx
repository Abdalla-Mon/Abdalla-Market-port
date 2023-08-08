import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function CardLoading() {
  return (
    <>
      <Stack spacing={1} className="skl-swiper">
        <Skeleton
          variant="rectangular"
          height={200}
          className="s-img-loading"
        />
        <Skeleton
          variant="text"
          sx={{ fontSize: "1rem" }}
          className="s-text-loading"
        />
        <Skeleton variant="text" height={100} className="s-contnet-loading" />
        <Skeleton className="price-loading" variant="text" width={30} />
        <Skeleton className="button-loading" variant="text" />
      </Stack>
    </>
  );
}
