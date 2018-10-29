import Point = require("../Point");
import Utils = require("../Utils");
import MultipointSymbol = require("./../MultipointSymbol");
declare class TShape extends MultipointSymbol {
    ctx: CanvasRenderingContext2D;
    color: string;
    labels: Utils.ILabels;
    midPoint: Point | null;
    endPoint: Point | null;
    theta: number;
    constructor(ctx: CanvasRenderingContext2D, color: string, labels: Utils.ILabels);
    draw(): Utils.ILabelPosition;
    getLabelPosition(): Utils.ILabelPosition;
}
export = TShape;
