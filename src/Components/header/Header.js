import React from "react";
import Style from "./Header.module.css";
import LeftSection from "./left section/LeftSection";
import MiddleSection from "./middle section/MiddleSection";
import { RightSection } from "./right section/RightSection";

export const Header = () => {
  return (
    <div className={Style.Header}>
      <LeftSection />

      <MiddleSection />

      <RightSection />
    </div>
  );
};
export default Header;
