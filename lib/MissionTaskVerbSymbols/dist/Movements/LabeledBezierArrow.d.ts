import Point = require("../Point");
import Utils = require("../Utils");
import MultipointSymbol = require("./../MultipointSymbol");
declare class LabeledBezierArrow extends MultipointSymbol {
    ctx: CanvasRenderingContext2D;
    color: string;
    labels: Utils.ILabels;
    midPoint: Point | null;
    endPoint: Point | null;
    constructor(ctx: CanvasRenderingContext2D, color: string, labels: Utils.ILabels);
    /**
     * First point is the starting point of the curve.
     * Second point is the ending point of the curve
     * Third point will be the first control point of bezier curve if points.length = 4, or the control points for quadratic curve if points.length = 3
     * Fourth point is the second control point of the bezier curve
     */
    draw(): Utils.ILabelPosition;
}
export = LabeledBezierArrow;
