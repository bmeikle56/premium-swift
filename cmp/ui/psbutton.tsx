import { CSSProperties } from "react";
import { 
  bg1,
  txt1,
  txt2,
  pur1
} from "../cst/constants"

import Link from "next/link";
import { sub } from "framer-motion/client";

export default function PSButton(
  { txt, subtxt, route }: { txt: string, subtxt?: string, route: string }
) {
  const style: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 12,
    background: bg1,
    boxShadow: `0 0 4px ${pur1}, 0 0 8px ${pur1}`,
    borderRadius: 8,
    cursor: 'pointer'
  }

  return (
    <Link href={route} passHref>
      <div style={style}>
        <pre style={{ color: txt1, margin: 0 }}>{txt}</pre>
        {subtxt && <pre style={{ color: txt2, margin: 0, fontSize: 10, paddingTop: 6 }}>{subtxt}</pre>}
      </div>
    </Link>
  );
}