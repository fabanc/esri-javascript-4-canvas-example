import Utils = require("../Utils");
import MultipointSymbol = require("./../MultipointSymbol");
declare class Disrupt extends MultipointSymbol {
    ctx: CanvasRenderingContext2D;
    color: string;
    labels: Utils.ILabels;
    private virtualPoints;
    constructor(ctx: CanvasRenderingContext2D, color: string, labels: Utils.ILabels);
    draw(): Utils.ILabelPosition;
}
export = Disrupt;
