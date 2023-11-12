export default function Size(props) {
  function handleSizeChange(e) {
    props.changeSize(e.target.value);
  }
  return (
    <div className="Size">
      <label htmlFor="Size-picker">Size:</label>
      <input
        onChange={(e) => {
          handleSizeChange(e);
        }}
        value={14}
        type="number"
        id="Size-picker"
        name="Size=picker"
      />
    </div>
  );
}
