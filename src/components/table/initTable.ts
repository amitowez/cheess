import {section} from '@/interfaces/section'
import {headName, colorsSection, Section} from './templateTable'

export function initTable(): object{
    console.log(headName, colorsSection)
    const lineLength = 8;
    const table: {[name: string]:  {[name: number]: section}} = {}
    headName.forEach((head, index)=>{
        for(let i = 0;i < lineLength;i++){
            if(!table[head]) table[head] ={}
            table[head][i+1] = new Section(head,i+1,getSectionColor(index, i+1))
        }
    })
    return table
}
function getSectionColor(headInd: number,sectionInd: number): string{
    if(headInd%2){
        return colorsSection[sectionInd%2]
    } else {
        return colorsSection[(sectionInd+1)%2]
    }
}