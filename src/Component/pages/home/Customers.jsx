import { Typography, Rating, Paper, Box } from "@mui/material";

export default function Customers() {
  let arr = [
    {
      title: "Abdalla ogholo",
      img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/client01-free-img.png",
    },
    {
      title: "Amany Ahmed",
      img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/client02-free-img.png",
    },
    {
      title: "Ahmed Refaat",
      img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/client01-free-img.png",
    },
  ];
  return (
    <>
      <section className="customers">
        <div className="container mx-auto">
          <Typography variant="h4" className="text-center">
            Customers Reviews
          </Typography>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {arr.map((e, index) => {
              return (
                <Box className="customer-paper " key={index}>
                  <Paper className="p-5 text-center">
                    <Rating name="read-only" value={5} readOnly />
                    <Typography varaint="body1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Deleniti odit perspiciatis exercitationem sunt voluptatum
                      culpa nobis nesciunt? Aspernatur in quisquam pariatur
                      saepe alias sint molestias voluptas eveniet vel culpa?
                      Inventore.
                    </Typography>
                    <Box className="customer-box flex justify-center items-center ">
                      <div className="img-holder m-3">
                        <img src={e.img} alt={e.title} />
                      </div>
                      <Typography variant="subtitle1">{e.title}</Typography>
                    </Box>
                  </Paper>
                </Box>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
{
  /* <Rating name="read-only" value={5} readOnly /> */
}
