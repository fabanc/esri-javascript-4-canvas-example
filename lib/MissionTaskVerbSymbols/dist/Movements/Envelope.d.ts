import MultipointSymbol = require("./../MultipointSymbol");
import Point = require("../Point");
import Utils = require("../Utils");
declare class Envelope extends MultipointSymbol {
    ctx: CanvasRenderingContext2D;
    color: string;
    labels: Utils.ILabels;
    endPoint: Point | null;
    perp: Point | null;
    side: number;
    projected: Point | null;
    constructor(ctx: CanvasRenderingContext2D, color: string, labels: Utils.ILabels);
    draw(): Utils.ILabelPosition;
}
export = Envelope;
