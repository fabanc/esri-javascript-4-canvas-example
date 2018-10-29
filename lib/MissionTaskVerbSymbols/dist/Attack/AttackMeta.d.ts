import Point = require("../Point");
import Utils = require("../Utils");
import MultipointSymbol = require("./../MultipointSymbol");
import AttackFlavor = require("./AttackFlavour");
declare class AttackMeta extends MultipointSymbol {
    ctx: CanvasRenderingContext2D;
    color: string;
    labels: Utils.ILabels;
    attackFlavor: AttackFlavor;
    virtualPoints: Array<Point>;
    length: number;
    theta: number;
    arrowhead: number;
    constructor(ctx: CanvasRenderingContext2D, color: string, labels: Utils.ILabels, attackFlavor?: AttackFlavor);
    draw(): Utils.ILabelPosition;
    drawLabel(): Utils.ILabelPosition;
}
export = AttackMeta;
