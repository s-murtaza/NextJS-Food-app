"use client";

import { Link as ScrollLink } from "react-scroll";

export default function CategoryFilters() {
  const buttonClass =
    "py-2 px-4 md:px-8 hover:bg-yellow-600 duration-300 ease-in-out";
  const pClass =
    "flex flex-col items-center uppercase text-black text-sm tracking-wider font-semibold";
  return (
    <div className="flex flex-row w-full justify-center bg-yellow-800 sticky top-0 z-5">
      <ScrollLink
        className={buttonClass}
        to={"Appetizers"}
        smooth={true}
        duration={600}
        offset={-90}
      >
        <p className={pClass}>
          <img src="images/appetizerIcon.png" className="w-10 md:w-14 mb-1" />
          Appetizers
        </p>
      </ScrollLink>
      <ScrollLink
        className={buttonClass}
        to={"Main Courses"}
        smooth={true}
        duration={700}
        offset={-90}
      >
        <p className={pClass}>
          <img src="images/maincourseIcon.png" className="w-10 md:w-14 mb-1" />
          Main Course
        </p>
      </ScrollLink>
      <ScrollLink
        className={buttonClass}
        to={"Desserts"}
        smooth={true}
        duration={900}
        offset={-90}
      >
        <p className={pClass}>
          <img src="images/desertIcon.png" className="w-10 md:w-14 mb-1" />
          Desserts
        </p>
      </ScrollLink>
      <ScrollLink
        className={buttonClass}
        to={"drinks"}
        smooth={true}
        duration={1000}
        offset={-90}
      >
        <p className={pClass}>
          <img src="images/drinksIcon.png" className="w-10 md:w-14 mb-1" />
          Drinks
        </p>
      </ScrollLink>
    </div>
  );
}
