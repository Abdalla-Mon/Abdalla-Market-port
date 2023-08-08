import { Typography } from "@mui/material";
import ShopNow from "../../ShopNow";
export default function Offers() {
  let arr = [
    {
      title: "Fresh Fruits",
      key: "offer-fruit",
    },
    {
      title: "Fresh Vegetables",
      key: "offer-vegetable",
    },
    {
      title: "Organic Legume",
      key: "offer-organic",
    },
  ];
  return (
    <section className="offers">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {arr.map((ele) => {
            return (
              <div
                className={
                  "offer-back bg-no-repeat	bg-right-bottom	bg-contain relative	" +
                  ele.key
                }
                key={ele.key}
              >
                <div className="offer-back-lay"></div>
                <div className={"offer relative"}>
                  <Typography variant="h5" className="offer-heading">
                    {ele.title}
                  </Typography>
                  <Typography>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quas ullam beatae illo, sapiente reiciendis fugiat. Eos amet
                    quibusdam quisquam assumenda.
                  </Typography>
                  <ShopNow />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="offer-bar">
        <div className="container mx-auto">
          <div className="sm:flex">
            <Typography variant="h4">
              Get 25% Off On Your First Purchase!
            </Typography>
            <ShopNow />
          </div>
        </div>
      </div>
      <Typography variant="h5" className="text-center">
        Try It For Free. No Registration Needed.
      </Typography>
    </section>
  );
}
