import Box__w from "./Box__w";
import Box__b from "./Box__b";
function Display() {
    let flag = 0;
    let Boxes = [];
    for (let i = 1; i <= 64; i++) {
        if (flag === 0) {
            Boxes.push(<Box__w />)
            flag = 1
            if(i%8===0){
                flag=0
            }
        }
        else {
            Boxes.push(<Box__b />)
            flag = 0
            if(i%8===0){
                flag=1
            }
        }
    }
    return Boxes;


}
export default Display;

