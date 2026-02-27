import { 
  bg1,
  txt1,
  pur1
} from "../cst/constants"

import Link from "next/link";

export default function PSButton(
  { txt, route }: { txt: string, route: string }
) {
  return (
    <Link href={route} passHref>
      <div
        style={{
          display: 'flex',
          padding: 12,
          background: bg1,
          boxShadow: `0 0 4px ${pur1}, 0 0 8px ${pur1}`,
          borderRadius: 8,
          cursor: 'pointer'
        }}
      >
        <pre style={{ color: txt1, margin: 0 }}>{txt}</pre>
      </div>
    </Link>
  );
}