import Wallpaper from "@/cmp/ui/wallpaper";
import { CSSProperties } from "react";
import FadeInAnim from "@/cmp/anm/fadeinanim";
import PSPre from "@/cmp/ui/pspre";
import TwoColumn from "@/cmp/ui/twocolumn";
import PSCodeBlock from "@/cmp/ui/pscodeblock";
import { struct } from "@/cmp/cst/swiftfundamentals";

function Left() {
  return (
    <>
      <PSPre txt="Let's walk through Swift concepts"/>
      <PSCodeBlock lines={struct}/>
      <PSPre txt=""/>
    </>
  )
}

// * structs
//  - Structs are value types, meaning every time you assign or pass them, you get a copy
//  - Great for small, self-contained data
//  - Stored in the stack
//  - Choose structs as the default unless classes are needed

// * classes
//  - Classes are reference types, meaning multiple variables can point to the same instance
//  - Shared across assignments (mutating one reference mutates all references)
//  - Supports inheritance
//  - Stored in the heap
//  - ARC reference counting

function Right() {
  return (
    <>
      <PSPre txt="Let's walk through the following problem and a solution"/>
    </>
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
