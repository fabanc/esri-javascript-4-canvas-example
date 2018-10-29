import MultipointSymbol = require("./../MultipointSymbol");
import Utils = require("../Utils");
declare class Phaseline extends MultipointSymbol {
    ctx: CanvasRenderingContext2D;
    color: string;
    labels: Utils.ILabels;
    doubleStrike: boolean;
    constructor(ctx: CanvasRenderingContext2D, color: string, labels: Utils.ILabels);
    draw(): Utils.ILabelPosition;
}
export = Phaseline;
