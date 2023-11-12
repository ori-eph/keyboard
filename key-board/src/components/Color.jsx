export default function Color(props) {
  function handleColorChange(e) {
    props.setColor(e.target.value);
  }
  return (
    <div className="color">
      <label htmlFor="color-picker">Text color:</label>
      <input
        onChange={(e) => {
          handleColorChange(e);
        }}
        type="color"
        id="color-picker"
        name="color=picker"
      />
    </div>
  );
}
