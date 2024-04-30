import { JellyLogo } from "../atoms/JellyLogo";
import React, { useState } from "react";
import {
  Icon,
  IconCreditCardFilled,
  IconHomeFilled,
  IconProps,
  IconSettings,
  IconToolsKitchen2,
} from "@tabler/icons-react";
import { NavTabButton } from "../atoms/NavTabButton";
import { cn } from "../../utils/utils";

export type NavbarStyle = "primary" | "secondary";
export type NavbarType = "desktop" | "mobile";

export function Navbar({
  type = "desktop",
  style = "primary",
}: {
  type: NavbarType
  style: NavbarStyle
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const setSelected = (index: number) => {
    setSelectedIndex(index);
  };

  const textIconArray: {
    text: string;
    icon: React.ForwardRefExoticComponent<
      Omit<IconProps, "ref"> & React.RefAttributes<Icon>
    >;
  }[] = [
    { text: "home", icon: IconHomeFilled },
    { text: "finance", icon: IconCreditCardFilled },
    { text: "kitchen", icon: IconToolsKitchen2 },
    { text: "settings", icon: IconSettings },
  ];

  const bgStyle = type === "desktop" ? "bg-primary-900 top-0" : "bg-gray-50 bottom-0";

  return (
    <nav className={cn(`px-8 flex h-14 w-full z-50 shadow-xl fixed`, bgStyle)}>
          <div className="h-full flex items-center w-max">
            {style === "primary" && type ==="desktop" ? <JellyLogo style="secondary" /> : ""}
          </div>
          <div className="flex h-full w-full justify-center ">
            {textIconArray.map(({ text, icon }, index) => (
              <NavTabButton
                type="desktop"
                NavIcon={style === "primary" ? icon : null}
                text={text}
                selected={selectedIndex === index}
                setSelected={() => setSelected(index)}
              />
            ))}
          </div>
    </nav>
  );
}
