//import {studentForm} from './studentform';
import {depList} from './studentArray';
import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {
 getDepartmentList(){

   return depList;
}

// getStdList(studentform){
//     return stdlist;
// }
}
