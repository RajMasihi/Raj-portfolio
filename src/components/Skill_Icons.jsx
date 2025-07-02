import React from "react";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as MdIcons from "react-icons/md";
import * as TbIcons from "react-icons/tb";

function Skill_Icons({ icon }) {
  const icon_type = {
    fa: FaIcons,
    md: MdIcons,
    si: SiIcons,
    tb: TbIcons,
  };
  const type = icon.slice(0, 2).toLowerCase();

  const IconComponent = icon_type[type][icon];
  console.log(IconComponent);
  const show_icon = IconComponent ? (
    <IconComponent className="icon" />
  ) : (
    <span>icon not showing</span>
  );

  return <div>{show_icon}</div>;
}

export default Skill_Icons;
