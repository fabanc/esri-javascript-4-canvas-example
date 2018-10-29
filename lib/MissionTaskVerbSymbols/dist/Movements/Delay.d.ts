import RearwardMovement = require("./RearwardMovement");
import Utils = require("./../Utils");
declare class Delay extends RearwardMovement {
    draw(): Utils.ILabelPosition;
}
export = Delay;
