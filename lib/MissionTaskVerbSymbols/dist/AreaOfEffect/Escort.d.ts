import Utils = require("../Utils");
import IDerivedPointsInfo = require("./IDerivedPointsInfo");
import MultipointSymbol = require("./../MultipointSymbol");
declare class Security extends MultipointSymbol implements Utils.Symbol {
    ctx: CanvasRenderingContext2D;
    color: string;
    labels: Utils.ILabels;
    offset: number;
    constructor(ctx: CanvasRenderingContext2D, color: string, labels: Utils.ILabels);
    draw(): Utils.ILabelPosition;
    getDerivedPointInfo(offset: number): IDerivedPointsInfo;
}
export = Security;
