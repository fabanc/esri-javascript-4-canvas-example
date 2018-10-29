import Utils = require("../Utils");
import MultipointSymbol = require("./../MultipointSymbol");
import IDerivedPointsInfo = require("./IDerivedPointsInfo");
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
