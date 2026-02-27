import Image from "next/image";
import Support from "@/cmp/ui/support";
import Title from "@/cmp/ui/title";
import PSButton from "@/cmp/ui/psbutton";
import PSParagraph from "@/cmp/ui/psparagraph";
import Wallpaper from "@/cmp/ui/wallpaper";

export default function Page() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 40, height: '100vh'}}>
      <Wallpaper/>
      <Title/>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <pre></pre>
      </div>
      <PSButton txt={'Get Started'} route={'study'}/>
    </div>
  );
}
