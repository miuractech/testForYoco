import logo from "../YOCO.svg";

export default function Component() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img src={logo} alt="" />
    </div>
  );
}
