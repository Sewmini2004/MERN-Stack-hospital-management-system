import React from "react";
import MyButton from "../../../hospital-management-system/src/components/button/myButton";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h3 className="font-bold  text-4xl text-[#213360]">{title}</h3>
          <p className={' font-bold '}>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and to be the first and best choice for healthcare.</p>
          <p className={'text-[#213360]'}>We will work with you to develop individualised care plans, including management of chronic diseases. We are committed to being the region’s premier healthcare network providing patient centered care that inspires clinical and service excellence.</p>

        </div>
        <div className="banner w-[800px] h-[450px] mt-10" >
          <img src={imageUrl}  alt="hero"  />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
