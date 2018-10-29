import Point = require("../Point");
import Utils = require("../Utils");
import MultipointSymbol = require("./../MultipointSymbol");
declare class RearwardMovement extends MultipointSymbol {
    ctx: CanvasRenderingContext2D;
    color: string;
    labels: Utils.ILabels;
    endPoint: Point | null;
    perpendicular: Point | null;
    side: number;
    projected: Point | null;
    constructor(ctx: CanvasRenderingContext2D, color: string, labels: Utils.ILabels);
    draw(): Utils.ILabelPosition;
}
export = RearwardMovement;
