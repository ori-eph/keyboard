import Button from "./Button";
import "../css/keyboard.css";

export default function Font(props) {
  function handleFontStyleChange(e) {
    props.fontStyle !== e
      ? props.setFontStyle(e)
      : props.setFontStyle("normal");
  }

  function handleFontWeightChange(e) {
    props.fontWeight !== e
      ? props.setFontWeight(e)
      : props.setFontWeight("normal");
  }

  function handleTextDecorationChange(e) {
    props.textDecoration !== e
      ? props.setTextDecoration(e)
      : props.setTextDecoration("none");
  }

  return (
    <div className="Font">
      <Button
        value="bold"
        className="key"
        style={{ fontWeight: "bold" }}
        onClick={() => handleFontWeightChange("bold")}
      />
      <Button
        value="italic"
        className="key"
        style={{ fontStyle: "italic" }}
        onClick={() => handleFontStyleChange("italic")}
      />
      <Button
        value="underline"
        className="key"
        style={{ textDecoration: "underline" }}
        onClick={() => handleTextDecorationChange("underline")}
      />
    </div>
  );
}
