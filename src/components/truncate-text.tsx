interface TruncatedTextProps {
  text: string;
}

const TruncatedText = ({ text }: TruncatedTextProps) => {
  return (
    <span
      className="inline-block max-w-[150px] overflow-hidden whitespace-nowrap text-ellipsis"
      style={{
        display: "inline-block",
        maxWidth: "clamp(100px, 150px, 200px)",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
      }}
    >
      {text}
    </span>
  );
};

export default TruncatedText;