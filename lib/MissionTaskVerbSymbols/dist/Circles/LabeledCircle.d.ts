import Circle = require("./Circle");
import Utils = require("../Utils");
declare class LabeledCircle extends Circle {
    arcAngle: number;
    draw(): Utils.ILabelPosition;
}
export = LabeledCircle;
