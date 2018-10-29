import AttackMeta = require("./AttackMeta");
import { ILabelPosition } from "../Utils";
declare class CounterAttack extends AttackMeta {
    draw(): ILabelPosition;
}
export = CounterAttack;
