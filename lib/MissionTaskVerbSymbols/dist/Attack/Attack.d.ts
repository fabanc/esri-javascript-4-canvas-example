import AttackMeta = require("./AttackMeta");
import { ILabelPosition } from "../Utils";
declare class Attack extends AttackMeta {
    draw(): ILabelPosition;
}
export = Attack;
