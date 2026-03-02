type Token = [txt: string, color: string];

interface PSCodeBlockProps {
  lines: Token[][];
}

export default function PSCodeBlock({ lines }: PSCodeBlockProps) {
  return (
    <div
      style={{
        fontFamily: "monospace",
        whiteSpace: "pre",        
      }}
    >
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} style={{ display: "block" }}>
          {line.map(([txt, color], tokenIndex) => (
            <pre
              key={tokenIndex}
              style={{
                display: "inline",
                margin: 0,
                color,
              }}
            >
              {txt}
            </pre>
          ))}
        </div>
      ))}
    </div>
  );
}