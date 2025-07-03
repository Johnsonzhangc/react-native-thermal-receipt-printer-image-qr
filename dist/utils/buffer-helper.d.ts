import { Buffer } from "buffer";
export default class BufferHelper {
    buffers: Buffer[];
    size: number;
    constructor();
    get length(): number;
    concat: (buffer: Buffer) => BufferHelper;
    empty: () => BufferHelper;
    toBuffer: () => Buffer;
    toString: (encoding: string) => string;
    load: (stream: any, callback: any) => void;
}
