import Utils = require("../Utils");
import Oneclickers = require("./Oneclicker");
import DestroyDecorators = require("./DestroyDecorators");
declare class Destroy extends Oneclickers implements Utils.Symbol {
    private offset;
    private dashType;
    decorator: DestroyDecorators;
    draw(): Utils.ILabelPosition;
}
export = Destroy;
