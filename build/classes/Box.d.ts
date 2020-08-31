import { IBoundingBox } from './BoundingBox';
import { IDimensions } from './Dimensions';
import { Point } from './Point';
import { IRect } from './Rect';
export declare class Box<BoxType = any> implements IBoundingBox, IRect {
    static isRect(rect: any): boolean;
    static assertIsValidBox(box: any, callee: string, allowNegativeDimensions?: boolean): void;
    private _x;
    private _y;
    private _width;
    private _height;
    constructor(_box: IBoundingBox | IRect, allowNegativeDimensions?: boolean);
    get x(): number;
    get y(): number;
    get width(): number;
    get height(): number;
    get left(): number;
    get top(): number;
    get right(): number;
    get bottom(): number;
    get area(): number;
    get topLeft(): Point;
    get topRight(): Point;
    get bottomLeft(): Point;
    get bottomRight(): Point;
    round(): Box<BoxType>;
    floor(): Box<BoxType>;
    toSquare(): Box<BoxType>;
    rescale(s: IDimensions | number): Box<BoxType>;
    pad(padX: number, padY: number): Box<BoxType>;
    clipAtImageBorders(imgWidth: number, imgHeight: number): Box<BoxType>;
    shift(sx: number, sy: number): Box<BoxType>;
    padAtBorders(imageHeight: number, imageWidth: number): {
        dy: number;
        edy: number;
        dx: number;
        edx: number;
        y: number;
        ey: number;
        x: number;
        ex: number;
        w: number;
        h: number;
    };
    calibrate(region: Box): Box<any>;
}
//# sourceMappingURL=Box.d.ts.map