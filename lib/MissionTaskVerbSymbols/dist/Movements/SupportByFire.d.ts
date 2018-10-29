import ByFire = require("./ByFire");
import Utils = require("./../Utils");
declare class SupportByFire extends ByFire {
    ctx: CanvasRenderingContext2D;
    color: string;
    labels: Utils.ILabels;
    constructor(ctx: CanvasRenderingContext2D, color: string, labels: Utils.ILabels);
    draw(): Utils.ILabelPosition;
}
export = SupportByFire;
