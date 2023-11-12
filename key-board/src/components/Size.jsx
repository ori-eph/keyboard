export default function Size(props) {
  function handleSizeChange(e) {
    const size = e.target.value > 250 ? 250 : e.target.value;
    props.setSize(size);
  }
  return (
    <div className="Size">
      <label htmlFor="Size-picker">Font size:</label>
      <input
        onChange={(e) => {
          handleSizeChange(e);
        }}
        value={props.size > 250 ? 250 : props.size}
        min={1}
        max={250}
        type="number"
        id="Size-picker"
        name="Size=picker"
      />
    </div>
  );
}
