import { Button } from "@mantine/core";
import DndListHandle from "./dnd";

export default function Component() {
    return (
        <div>
            <div style={{fontSize:25,fontWeight:600}} >
                To Do list
            </div>

            {data.map(d=>(
                <div>
                {d.name}
                </div>
            ))}
        </div>
    )
}
//   <Demo />


export const data = [{ position: 1, mass: 1.007, symbol: "H", name: "Hydrogen" }, { position: 6, mass: 12.011, symbol: "C", name: "Carbon" }, { position: 8, mass: 15.999, symbol: "O", name: "Oxygen" }, { position: 11, mass: 22.99, symbol: "Na", name: "Sodium" }, { position: 16, mass: 32.06, symbol: "S", name: "Sulfur" }]; 