import Button from "./Button";

function Return(props) {
  function goBackStep() {
    const lastStep = props.returnArr[props.returnArr.length - 1];
    if (lastStep.action === "delete") {
      props.setText((prev) => [...prev, lastStep.deletedText]);
    } else {
      props.setText((prev) => [...prev].slice(0, -1));
    }
    props.setReturnArr((prev) => [...prev].slice(0, -1));
  }
  return (
    <Button
      value="↩"
      onClick={goBackStep}
      disabled={props.returnArr.length ? false : true}
    />
  );
}

export default Return;
