import Image from "next/image";
import Support from "@/cmp/ui/support";
import Title from "@/cmp/ui/title";
import PSButton from "@/cmp/ui/psbutton";

export default function Home() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 40}}>
      <Title/>
      <PSButton txt={'Get Started'} route={'study'}/>
    </div>
  );
}
