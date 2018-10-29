import Point = require("./Point");
import Utils = require("./Utils");
declare abstract class MultipointSymbol implements Utils.Symbol {
    maxNodes: number;
    ctx: CanvasRenderingContext2D;
    points: Array<Point>;
    constructor(maxNodes: number, ctx: CanvasRenderingContext2D);
    addPoint(point: Point): boolean;
    project(point: Point): void;
    abstract draw(): Utils.ILabelPosition;
    drawLabels(labelPositions: Utils.ILabelPosition, labelTexts: Utils.ILabels): void;
    highlightVertices(): void;
}
export = MultipointSymbol;
