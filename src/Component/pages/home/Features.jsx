/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const icons = [
  "fa-solid fa-truck",
  "fa-regular fa-money-bill-1",
  "fa-regular fa-address-book",
  "fa-solid fa-recycle",
];
const text = [
  {
    heading: "Free Shipping",
    p: "Above $5 Only",
  },
  {
    heading: "Huge Savings",
    p: "At Lowest Price",
  },
  {
    heading: "Certified Organic",
    p: "100% Guarantee",
  },
  {
    heading: "Easy Returns",
    p: "No Questions Asked",
  },
];
export default function Features() {
  return (
    <section className="features">
      <div className="container mx-auto">
        <div className="feature-grid grid sm:grid-cols-2 lg:grid-cols-4  gap-4">
          {text.map((ele, index) => {
            return (
              <div className="feature-ele flex shadow-md" key={index}>
                <div className="feature-icon">
                  <Icon iName={icons[index]}></Icon>
                </div>
                <div className="feature-text">
                  <Text heading={ele.heading} p={ele.p} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Icon({ iName }) {
  return <FontAwesomeIcon icon={iName} className="text-lg md:text-3xl" />;
}
function Text({ heading, p }) {
  return (
    <>
      <h3 className="font-bold">{heading}</h3>
      <p>{p}</p>
    </>
  );
}
{
  /* <FontAwesomeIcon icon="fa-solid fa-truck" /> */
}
