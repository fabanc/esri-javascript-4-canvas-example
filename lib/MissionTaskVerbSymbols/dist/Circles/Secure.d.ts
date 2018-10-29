import Point = require("../Point");
import Utils = require("../Utils");
import LabeledCircle = require("./LabeledCircle");
declare class Secure extends LabeledCircle {
    arcEnd: Point | null;
    draw(): Utils.ILabelPosition;
}
export = Secure;
