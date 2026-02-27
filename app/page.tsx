import Image from "next/image";
import Support from "@/cmp/ui/support";
import Title from "@/cmp/ui/title";

export default function Home() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <Title/>
      <Support/>
    </div>
  );
}
