import Wallpaper from "@/cmp/ui/wallpaper";
import { CSSProperties } from "react";
import FadeInAnim from "@/cmp/anm/fadeinanim";
import PSPre from "@/cmp/ui/pspre";
import TwoColumn from "@/cmp/ui/twocolumn";
import PSCode from "@/cmp/ui/pscodeblock";

function Left() {
  const codeData: [string, string][][] = [
    [
      ["func ", "rgb(255,0,0)"],
      ["getValue", "rgb(0,0,255)"],
      ["(from val: Int?) async -> Int {", "rgb(255,255,255)"],
    ],
    [
      ["  ", "rgb(255,255,255)"], // indent
      ["return ", "rgb(255,0,0)"],
      ["val", "rgb(0,0,255)"],
      [" ?? 0", "rgb(255,255,255)"],
    ],
    [
      ["}", "rgb(255,255,255)"],
    ],
  ];

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <PSCode lines={codeData}/>
    </div>
    
  )
}

function Right() {
  return (
    <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
  )
}

export default function Page() {
  const style: CSSProperties = {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    flexDirection: 'column', 
    gap: 40, 
  }

  return (
    <FadeInAnim style={style}>
      <Wallpaper/>
      <TwoColumn
      left={
        <Left/>
      }
      right={
        <Right/>
      }
      />
    </FadeInAnim>
  );
}
