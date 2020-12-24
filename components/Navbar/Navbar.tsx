import React, { useState, Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const [activeItem, setState] = useState("home");
  const router = useRouter();

  const handleItemClick = (e, { name }) => {
    setState(name);
    router.push(`/${name}`);
  };

  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item
          name="products"
          active={activeItem === "home"}
          onClick={handleItemClick}
        />

        <Menu.Item
          name="about"
          active={activeItem === "about"}
          onClick={handleItemClick}
        />
      </Menu>
    </div>
  );
};
export default NavBar;
