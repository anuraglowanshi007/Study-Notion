import React from "react";
import Instructor from "../../../assets/Images/Instructor.png";
import HighlightText from "./HighlightText";
import CTAButton from "./Button";
import { FaArrowRight } from "react-icons/fa";

const InstructorSection = () => {
  return (
    <div className="mt-16">

      {/* Main div */}
      <div className="flex flex-row gap-20 items-center ">
        
        {/* Left div */}
        <div className="w-[50%]">
          <img src={Instructor} alt="Instructor" className="shadow-white" />
        </div>

        {/* Right div */}
        <div className="w-[50%] flex flex-col gap-10 ">
          <div className="text-white text-4xl font-semibold w-[50%]">
            Become an
            <HighlightText text={"instructor"} />
          </div>

          <p className="font-medium text-[16px] w-[80%] text-richblack-300">
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love.
          </p>

          <div className="w-fit">
            <CTAButton active={true} linketo={"./signup"}>
              <div className="flex flex-row items-center gap-2">
                Start teaching today
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
