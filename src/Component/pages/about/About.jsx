import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useMotionValueEvent,
} from "framer-motion";
import { Typography, Avatar } from "@mui/material";
import aboutIllu from "../../../assets/About us page-amico.svg";
import marketPhoto from "../../../assets/market.jpg";
import lemon from "../../../assets/lemon.jpg";
import team1 from "../../../assets/team1.jpg";
import team2 from "../../../assets/team2.jpg";
import team3 from "../../../assets/team3.jpg";

let arr = [
  { title: "Abdalla Abdelsabour", img: team1, job: "Products manager" },
  { title: "Ahmed Refaat", img: team2, job: "Sales manager" },
  { title: "Yousef Marzouq", img: team3, job: "Human resource" },
  { title: "Amany Abdalla", img: team2, job: "Marketing" },
  { title: "Ahmed Esmail", img: team3, job: "Farm manager" },
  { title: "Lionel Messi", img: team1, job: "Store manager" },
];

export default function About() {
  const { scrollY } = useScroll();
  const [_, forceUpdate] = React.useReducer((x) => x + 1, 0);

  let backgroundColor;
  let colors;

  if (document.querySelector(".theme-1") !== null) {
    colors = ["#d8e2dc", "#ffe5d9", "#f6d3d9"];
  } else if (document.querySelector(".theme-2") !== null) {
    colors = ["#f3ffe8", "#b8bdf2", "#8395f9"];
  } else if (document.querySelector(".dark") !== null) {
    colors = ["#1a1625", "#46424f", "#2f2b3a"];
  } else {
    colors = ["#fefae0", "#e9edc9", "#ccd5ae"];
  }

  backgroundColor = useTransform(
    scrollY,
    [
      0,
      (document.body.scrollHeight - 50) / 3,
      (document.body.scrollHeight - 50) / 1.5,
    ],
    colors
  );

  let variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 200 },
  };
  const variants2 = {
    open: {
      rotate: [0, 0, -270, -270, 0],

      width: ["100%", "50%", "0%", "0%", "100%"],
      borderRadius: ["40px", "40px", "0", "0", "20px"],
    },
    open2: {
      width: ["100%", "50%", "0%", "0%", "100%"],
      opacity: [1, 0.8, 0.4, 0, 1],

      borderRadius: ["40px", "40px", "0", "0", "20px"],
    },
    closed: { scale: 1, borderRadius: "20px", rotate: 0 },
  };

  return (
    <motion.div className="about" style={{ backgroundColor }}>
      <button
        className="about-click opacity-0 cursor-default absolute"
        onClick={() => {
          forceUpdate();
        }}
      ></button>
      <div className="container mx-auto">
        <motion.div
          className="about-landing flex flex-col sm:flex-row-reverse sm:justify-between"
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: true }}
        >
          <div className="about-hello">
            <Typography variant="h3">About Us</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum rerum sit est exercitationem voluptas ratione cumque
              harum, magnam eos nesciunt vel, molestias eum dicta deleniti sint
              praesentium excepturi tempora? Fuga.
            </Typography>
          </div>
          <div className="about-img">
            <img src={aboutIllu} alt="illustration" />
          </div>
        </motion.div>
      </div>
      <div className="divider-div ">
        <div className="container mx-auto flex justify-between">
          <Typography variant="h5">Logo</Typography>
          <Typography variant="h5">Logo</Typography>
          <Typography variant="h5">Logo</Typography>
          <Typography variant="h5">Logo</Typography>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="we-bring">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={variants}
            className="sm:flex flex-row "
            // transition={{ type: "spring", stiffness: 100 }}
            transition={{
              type: "tween",
              duration: 1,
            }}
          >
            <div className="we-bring-text sm:flex flex-col">
              <Typography variant="h3">Our mission</Typography>
              <Typography variant="h5">
                We bring the market to your Home
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                blanditiis delectus alias sunt impedit distinctio reprehenderit
                placeat, officia praesentium dolorum quas laborum, animi,
                reiciendis eveniet quae. Vitae voluptate incidunt possimus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                blanditiis delectus alias sunt impedit distinctio reprehenderit
                placeat, officia praesentium dolorum quas laborum, animi,
                reiciendis eveniet quae. Vitae voluptate incidunt possimus.
              </Typography>
            </div>
            <motion.div className="we-bring-photo">
              <img src={marketPhoto} alt="marketPhoto"></img>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="our-history">
          <motion.div
            initial="hidden"
            whileInView="visible"
            className="sm:flex flex-row-reverse "
            variants={variants}
            transition={{
              type: "tween",
              duration: 1,
            }}
          >
            <div className="we-bring-text sm:flex flex-col">
              <Typography variant="h3">Our Fresh Products</Typography>
              <Typography variant="h5">
                We bring all of our fresh products from our farm and to your
                home just bt one click
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                blanditiis delectus alias sunt impedit distinctio reprehenderit
                placeat, officia praesentium dolorum quas laborum, animi,
                reiciendis eveniet quae. Vitae voluptate incidunt possimus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                blanditiis delectus alias sunt impedit distinctio reprehenderit
                placeat, officia praesentium dolorum quas laborum, animi,
                reiciendis eveniet quae. Vitae voluptate incidunt possimus.
              </Typography>
            </div>
            <div className="we-bring-photo">
              <img src={lemon} alt="lemon"></img>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="our-team">
          <Typography variant="h3">
            <motion.span
              initial="hidden"
              whileInView="visible"
              variants={variants}
              transition={{
                type: "tween",
                duration: 1,
              }}
            >
              Our Team
            </motion.span>
          </Typography>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={variants}
            transition={{ type: "spring", stiffness: 100 }}
            className="grid sm:grid-cols-2 md:grid-cols-3  gap-4"
          >
            {arr.map((e, index) => {
              return (
                <>
                  <OurELe variants2={variants2} e={e} />
                </>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function OurELe({ e, variants2 }) {
  let [opening, setOpening] = React.useState(false);
  let [anime, setAnime] = React.useState(false);
  return (
    <AnimatePresence>
      <motion.div
        className={"team"}
        variants={variants2}
        initial="closed"
        animate={anime ? "open" : "open2"}
        transition={{ type: "tween", duration: 1.5 }}
        exit="open"
        onClick={() => {
          setAnime(!anime);
          window.setTimeout(() => {
            setOpening(!opening);
          }, 1000);
        }}
      >
        {!opening && <motion.img src={e.img} alt={e.title} />}
        {opening && (
          <motion.div>
            <Avatar alt={e.title} src={e.img} sx={{ width: 64, height: 64 }} />
            <Typography variant="h5">{e.title}</Typography>
            <Typography variant="h6">{e.job}</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi blanditiis, voluptatibus minus perspiciatis velit
              tenetur rerum nulla neque, dolorum commodi exercitationem ut,
              deleniti qui tempore saepe officia. Ratione, nostrum corporis?
            </Typography>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
