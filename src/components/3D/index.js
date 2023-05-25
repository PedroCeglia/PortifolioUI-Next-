import dynamic from "next/dynamic";

const Planet3DComponent = dynamic(()=>import("./Planet3dComponent"))
const Computer3DComponent = dynamic(()=>import("./Desktop3DComponent"))
const StackBall3DComponent = dynamic(()=>import("./StacksBallComponent"))
const Stars3DComponent = dynamic(()=>import("./Stars3DComponent"))

export {Planet3DComponent, Computer3DComponent, StackBall3DComponent, Stars3DComponent}
