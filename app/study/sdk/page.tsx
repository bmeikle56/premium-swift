import Wallpaper from "@/cmp/ui/wallpaper";
import { CSSProperties } from "react";
import FadeInAnim from "@/cmp/anm/fadeinanim";
import Navbox from "@/cmp/nav/navbox";
import { txt1 } from "@/cmp/cst/constants";

const style: CSSProperties = {
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
  flexDirection: 'column', 
  gap: 40, 
  height: '100vh'
}

export default function Page() {
  return (
    <FadeInAnim style={style}>
      <Wallpaper/>
      <pre style={{color: txt1}}>{"Coming soon!"}</pre>
    </FadeInAnim>
  );
}
