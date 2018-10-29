import Point = require("../Point");
import Utils = require("../Utils");
import MultipointSymbol = require("./../MultipointSymbol");
declare class OpenRectangle extends MultipointSymbol {
    ctx: CanvasRenderingContext2D;
    color: string;
    labels: Utils.ILabels;
    midPoint: Point | null;
    endPoint: Point | null;
    distanceToOpenEnd: Point | null;
    perp: Point | null;
    tilt: number;
    constructor(ctx: CanvasRenderingContext2D, color: string, labels: Utils.ILabels);
    draw(): Utils.ILabelPosition;
}
export = OpenRectangle;
