import Wallpaper from "@/cmp/ui/wallpaper";
import { CSSProperties } from "react";
import FadeInAnim from "@/cmp/anm/fadeinanim";
import Navbox from "@/cmp/nav/navbox";

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
      <Navbox/>
    </FadeInAnim>
  );
}
