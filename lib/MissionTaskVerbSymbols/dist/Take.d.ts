import MultipointSymbol = require("./MultipointSymbol");
import Point = require("./Point");
import Utils = require("./Utils");
declare class Take extends MultipointSymbol {
    ctx: CanvasRenderingContext2D;
    color: string;
    labels: Utils.ILabels;
    constructor(ctx: CanvasRenderingContext2D, color: string, labels: Utils.ILabels);
    addPoint(point: Point): boolean;
    draw(): Utils.ILabelPosition;
}
export = Take;
