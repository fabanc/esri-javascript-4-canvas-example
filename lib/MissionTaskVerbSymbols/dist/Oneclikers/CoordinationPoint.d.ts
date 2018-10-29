import Utils = require("../Utils");
import Oneclickers = require("./Oneclicker");
declare class CoordinationPoint extends Oneclickers implements Utils.Symbol {
    draw(): Utils.ILabelPosition;
}
export = CoordinationPoint;
