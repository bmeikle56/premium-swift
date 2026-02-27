import Image from "next/image";
import Support from "@/cmp/ui/support";
import Title from "@/cmp/ui/title";
import PSButton from "@/cmp/ui/psbutton";
import PSParagraph from "@/cmp/ui/psparagraph";
import Wallpaper from "@/cmp/ui/wallpaper";
import PSPre from "@/cmp/ui/pspre";

export default function Page() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 40, height: '100vh'}}>
      <Wallpaper/>
      <PSPre txt="Coming soon!"/>
    </div>
  );
}
