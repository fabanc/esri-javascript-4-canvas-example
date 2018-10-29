import Utils = require("../Utils");
import Oneclickers = require("./Oneclicker");
declare class Suppress extends Oneclickers implements Utils.Symbol {
    draw(): Utils.ILabelPosition;
}
export = Suppress;
