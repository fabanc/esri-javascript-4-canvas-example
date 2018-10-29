import Point = require("./Point");
declare class LabelPosition extends Point {
    angle: number;
    translation: Point;
    constructor(x: number, y: number, angle?: number, translation?: Point);
}
export = LabelPosition;
