import TShape = require("./TShape");
import { ILabelPosition } from "../Utils";
declare class Block extends TShape {
    draw(): ILabelPosition;
}
export = Block;
