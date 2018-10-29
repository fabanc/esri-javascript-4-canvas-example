import MultipointSymbol = require("./../MultipointSymbol");
import Point = require("../Point");
import Utils = require("../Utils");
declare class Circle extends MultipointSymbol {
    ctx: CanvasRenderingContext2D;
    color: string;
    labels: Utils.ILabels;
    radius: number;
    theta: number;
    constructor(ctx: CanvasRenderingContext2D, color: string, labels: Utils.ILabels);
    addPoint(point: Point): boolean;
    draw(): Utils.ILabelPosition;
}
export = Circle;
