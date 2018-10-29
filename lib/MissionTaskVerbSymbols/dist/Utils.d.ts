import Point = require("./Point");
import Segment = require("./Segment");
import LabelPosition = require("./LabelPosition");
export interface Symbol {
    points: Array<Point>;
    maxNodes: number;
    addPoint(p: Point): boolean;
    draw(): ILabelPosition;
}
export interface ILabels {
    main: string | undefined;
    top: string | undefined;
    bottom: string | undefined;
}
export interface ILabelPosition {
    main: LabelPosition;
    top: LabelPosition;
    bottom: LabelPosition;
}
export declare const UndefinedLabelPosition: ILabelPosition;
export declare function drawLine(start: Point, end: Point, ctx: CanvasRenderingContext2D): void;
export declare function drawArrowedLine(start: Point, end: Point, ctx: CanvasRenderingContext2D): void;
export declare function drawLabeledCircle(x: number, y: number, r: number, theta: number, thetaMultiplier: number, labels: ILabels, ctx: CanvasRenderingContext2D): ILabelPosition;
export declare function drawLabels(labelPositions: ILabelPosition, labels: ILabels, ctx: CanvasRenderingContext2D): void;
/** @description Draw an X shape at a specific point.
 * @param {Point} point The center of the X-Shape.
 * @param {number} angle The angle.
 * @param {number} ctx The canvas context that will draw the shape.
 * @return {void}
 */
export declare function drawX(point: Point, angle: number, ctx: CanvasRenderingContext2D): void;
/** @description Draws the tip of an arrow at a specific point. The length of the arrow is hard-coded.
 * @param {Point} point The location of the tip used as a base for the array.
 * @param {number} angle The angle of the arrow.
 * @param {number} ctx The canvas context that will draw the arrow.
 * @return {void}
 */
/** @description Draws the tip of an arrow at a specific point. The length of the arrow is hard-coded.
 * @param {Point} point The location of the tip used as a base for the array.
 * @param {number} angle The angle of the arrow.
 * @param {number} ctx The canvas context that will draw the arrow.
 * @return {void}
 */
export declare function drawArrow(point: Point, angle: number, ctx: CanvasRenderingContext2D): void;
export declare function drawTicks(x: number, y: number, r: number, startAngle: number, theta: number, tickLength: number, toend: boolean, ctx: CanvasRenderingContext2D): void;
export declare function drawTriangles(x: number, y: number, r: number, startAngle: number, theta: number, tickLength: number, toend: boolean, ctx: CanvasRenderingContext2D): void;
export declare function lightningBolt(coords: Array<Point>, flipped: boolean, ctx: CanvasRenderingContext2D): void;
export declare function label(point: Point, label: string, ctx: CanvasRenderingContext2D): void;
export declare function labelMultiLine(coords: Point, label: string, ctx: CanvasRenderingContext2D): void;
export declare function drawPolyline(lines: Array<Segment>, ctx: CanvasRenderingContext2D): void;
export declare function projectPoint(p1: Point, p2: Point, p3: Point): Point;
export declare function perpendicular(coords: Point): Point;
export declare function normalize(coords: Point): Point;
export declare function bezierAt(coords: Array<Point>, t: number): {
    x: number;
    y: number;
    m: number;
};
export declare function angleBetween(a: Point, b: Point): number;
export declare function distance(a: Point, b: Point): number;
export declare function interpolatePointOnLine(a: Point, b: Point, frac: number): {
    x: number;
    y: number;
};
export declare function flotOld(coords: Array<Point>, doubleStroke: boolean, ctx: CanvasRenderingContext2D): void;
export declare function flot(coords: Array<Point>, doubleStroke: boolean, ctx: CanvasRenderingContext2D): void;
export declare function phaseline(coords: Array<Point>, lbl: string, ctx: CanvasRenderingContext2D): void;
export declare function boundary(coords: Array<Point>, lbl: string, ctx: CanvasRenderingContext2D): ILabelPosition;
export declare function side(a: Point, b: Point, c: Point): number;
export declare function highlightVertices(coords: Array<Point>, ctx: CanvasRenderingContext2D): void;
export declare function distancePointToSegment(p: Point, a: Point, b: Point): number;
export declare function distancePointToArc(p: Point, c: Point, r: number, thetaA: number, thetaB: number): number;
export declare function distancePointToBezier(p: Point, a: Point, b: Point, c: Point, d: Point): number;
