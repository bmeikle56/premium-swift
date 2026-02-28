import Wallpaper from "@/cmp/ui/wallpaper";
import { CSSProperties } from "react";
import FadeInAnim from "@/cmp/anm/fadeinanim";
import Navbox from "@/cmp/nav/navbox";
import { bg1, txt1 } from "@/cmp/cst/constants";
import { ReactNode } from "react";
import PSPre from "@/cmp/ui/pspre";

function Column({ children }: { children: ReactNode }) {
  const style: CSSProperties = {
    display: 'flex', 
    flexDirection: 'column', 
    gap: 20, 
    background: bg1,
    borderRadius: 8,
    width: '100%',
    padding: 16
  }

  return (
    <div style={style}>
      {children}
    </div>
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
      <div className="two-col">
        <Column>
          <PSPre txt="first sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
        </Column>
        <Column>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="lasdkaksda sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
          <PSPre txt="last sdsd amsdmad admamsda d adsmasdakkasd adkaksdkakdsaksdakds d dakdkakdka"/>
        </Column>
      </div>
    </FadeInAnim>
  );
}
