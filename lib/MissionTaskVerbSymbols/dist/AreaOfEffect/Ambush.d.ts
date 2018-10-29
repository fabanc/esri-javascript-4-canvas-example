import Utils = require("../Utils");
import MultipointSymbol = require("./../MultipointSymbol");
declare class Ambush extends MultipointSymbol {
    ctx: CanvasRenderingContext2D;
    color: string;
    labels: Utils.ILabels;
    constructor(ctx: CanvasRenderingContext2D, color: string, labels: Utils.ILabels);
    draw(): Utils.ILabelPosition;
}
export = Ambush;
