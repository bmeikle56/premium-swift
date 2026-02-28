"use client"

import Title from "@/cmp/ui/title";
import PSButton from "@/cmp/ui/psbutton";
import PSPre from "@/cmp/ui/pspre";
import Wallpaper from "@/cmp/ui/wallpaper";
import Disclaimer from "@/cmp/ui/disclaimer";
import RotatingImages from "@/cmp/ui/rotatingimages";
import VSpacer from "@/cmp/ui/vspacer";
import FadeInAnim from "@/cmp/anm/fadeinanim";
import { CSSProperties } from "react";

const style: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: 40,
  minHeight: "100vh",
}

export default function Page() {
  return (
    <FadeInAnim style={style}>
      <Wallpaper />
      <Title />
      <RotatingImages />
      <VSpacer h={20} />
      <PSPre txt={"Preparing for an iOS interview?"} />
      <PSButton txt={"Get Started"} route={"/study"} />
      <VSpacer h={20} />
      <Disclaimer />
    </FadeInAnim>
  );
}
