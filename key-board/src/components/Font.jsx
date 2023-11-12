import Button from "./Button";

export default function Font(props) {
  function handleFontChange(e) {
    props.setFont(e.target.value);
  }
  return (
    <div className="Font">
      <Button value="i" />
    </div>
  );
}
