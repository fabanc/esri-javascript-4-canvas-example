import LabeledCircle = require("./LabeledCircle");
import Utils = require("../Utils");
declare class Contain extends LabeledCircle {
    arcAngle: number;
    draw(): Utils.ILabelPosition;
}
export = Contain;
