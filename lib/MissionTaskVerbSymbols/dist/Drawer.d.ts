import Utils = require("./Utils");
/** @description Returns the module that contains the utility function
 *  used by the library.
 */
export declare function getMTVUtils(): typeof Utils;
export declare function sayHello(): void;
/** @description This function is a factory for building object that comply with
 *  the ISymbol interface. The type of object created is based on the verb passed
 *  as parameters. Verbs must be lower case and be a valid NATO mission task verb.
 *  @param {string} verb The mission task verb. It must be lower case.
 *  @param {CanvasRenderingContext2D} ctx The cavas on which the object will be drawn.
 *  @param {string} string The color used to draw the shape.
 *  @param {label} label The main label associated with the drawing. This label is generally position around the center of the drawing (optional).
 *  @param {label} labelTop The label at the top (optional).
 *  @param {label} labelBottom The label at the bottom (optional).
 *  @param {Array<number>} dashDefinition An array contains the dash options, as you would set it for canvas 2D context ctx.setLineDash
 *  @return {Utils.Symbol}
 */
export declare function factory(verb: string, ctx: CanvasRenderingContext2D, color: string, label: string, labelTop: string, labelBottom: string, dashDefinition: Array<number>): Utils.Symbol;
