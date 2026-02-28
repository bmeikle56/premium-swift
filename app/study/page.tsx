import Wallpaper from "@/cmp/ui/wallpaper";
import PSPre from "@/cmp/ui/pspre";
import { CSSProperties } from "react";
import FadeInAnim from "@/cmp/anm/fadeinanim";

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
      <PSPre txt="Coming soon!"/>
    </FadeInAnim>
  );
}
