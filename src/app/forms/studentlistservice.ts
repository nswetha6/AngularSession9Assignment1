//import {studentForm} from './studentform';
import {studentlistForm} from './studentform';
import { Injectable } from '@angular/core';

@Injectable()
export class StudentlistService {

    stdlist1:studentlistForm[]=[];

getStdList(studentlist:studentlistForm){
    // console.log(" before unshift funciton");
     this.stdlist1.unshift(studentlist);
    
}
//getFinalList():studentlistForm[]
getFinalList()
{
    console.log(" inside get final list function");
    return this.stdlist1;
}
}
