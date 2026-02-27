import Image from "next/image";
import Support from "@/cmp/ui/support";
import Title from "@/cmp/ui/title";
import PSButton from "@/cmp/ui/psbutton";
import PSParagraph from "@/cmp/ui/psparagraph";

export default function Home() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 40, height: '100vh'}}>
      <Title/>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <PSParagraph txt={
          'Preparing for an iOS interview?'
        }
        center={true}/>
      </div>
      <PSButton txt={'Get Started'} route={'study'}/>
    </div>
  );
}
