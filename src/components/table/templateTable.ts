import {section} from '@/interfaces/section'
export const headName: string[] = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
]

export const colorsSection: string[] = [
    'black',
    'white'
]


export class Section implements section {
    name: string;
    head: string;
    num: number;
    color: string;
    _figure = '';
    constructor(head: string,num: number,color: string){
        this.name = head+num;
        this.head = head;
        this.num = num;
        this.color = color;
    }
    get figure():string{
        return this._figure
    }
    set figure(value: string){
        this._figure = value
    }
}