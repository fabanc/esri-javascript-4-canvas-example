import MultipointSymbol = require("./../MultipointSymbol");
import Utils = require("../Utils");
declare class Boundary extends MultipointSymbol {
    ctx: CanvasRenderingContext2D;
    color: string;
    labels: Utils.ILabels;
    doubleStrike: boolean;
    constructor(ctx: CanvasRenderingContext2D, color: string, labels: Utils.ILabels);
    draw(): Utils.ILabelPosition;
}
export = Boundary;
