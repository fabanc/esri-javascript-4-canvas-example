import Utils = require("./../Utils");
import MultipointSymbol = require("./../MultipointSymbol");
declare class ByFire extends MultipointSymbol {
    ctx: CanvasRenderingContext2D;
    color: string;
    labels: Utils.ILabels;
    side: number;
    constructor(ctx: CanvasRenderingContext2D, color: string, labels: Utils.ILabels);
    draw(): Utils.ILabelPosition;
    drawBase(): void;
}
export = ByFire;
