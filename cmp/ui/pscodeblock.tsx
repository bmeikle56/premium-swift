type Token = [txt: string, color: string];

interface PSCodeBlockProps {
  lines: Token[][];
}

export default function PSCodeBlock({ lines }: PSCodeBlockProps) {
  return (
    <div
      style={{
        fontFamily: "monospace",
        whiteSpace: "pre-wrap", // preserves spaces and indentation
        overflowX: "auto", // allow horizontal scroll on small screens
        padding: "8px 0", // optional padding
      }}
    >
      {lines.map((line, lineIndex) => (
        <div key={lineIndex}>
          {line.map(([txt, color], tokenIndex) => (
            <span
              key={tokenIndex}
              style={{ color }}
            >
              {txt}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}