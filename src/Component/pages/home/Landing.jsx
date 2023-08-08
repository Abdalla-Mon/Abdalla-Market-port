import { NavLink } from "react-router-dom";
import ShopNow from "../../ShopNow";
function Landing() {
  return (
    <>
      <section className="landing-page flex items-center">
        <div className=" container mx-auto sm:flex sm:justify-between">
          <div className="landing-img">
            <img
              src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/organic-products-hero-600x514.png"
              alt="market photo"
            ></img>
          </div>
          <div className="landing-text flex justify-center flex-col">
            <h5 className="text-sm">Best Quality Products</h5>
            <h3 className="text-2xl">Join The Organic Movement!</h3>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <ShopNow />
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
