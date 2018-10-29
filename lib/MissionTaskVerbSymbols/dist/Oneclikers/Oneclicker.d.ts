import Point = require("../Point");
import Utils = require("./../Utils");
declare class Oneclicker {
    ctx: CanvasRenderingContext2D;
    color: string;
    labels: Utils.ILabels;
    points: Array<Point>;
    maxNodes: number;
    constructor(ctx: CanvasRenderingContext2D, color: string, labels: Utils.ILabels);
    addPoint(p: Point): boolean;
    getLabelPosition(): Utils.ILabelPosition;
    drawLabels(labelPositions: Utils.ILabelPosition, labelTexts: Utils.ILabels): void;
    highlightVertices(): void;
}
export = Oneclicker;
