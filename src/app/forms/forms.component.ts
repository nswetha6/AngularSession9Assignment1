import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from './studentservice';
//import {studentForm} from './studentform';
import {studentlistForm} from './studentform';
import { depList } from './studentArray';
import { StudentlistService } from './studentlistservice';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
 
   dlist:string[]=[];
  slist:studentlistForm;
  slistarray:studentlistForm[]=[];
  //student:studentForm;
  student:studentlistForm;

  submitted:boolean=false;
  constructor( private stdser:StudentService, private stdlistser:StudentlistService) {
    this.stdser=stdser;
    this.stdlistser=stdlistser;
    
   }
   ngOnInit() {
  //  this.student=new studentForm("","","","");
    this.student={
      firstname:"",
      middlename:"",
      lastname:"",
      depname:""
    }
    this.getStudentArray();
  }

   getStudentArray(){
    this.dlist= this.stdser.getDepartmentList();
}
//addform(stdntlistvalues:NgForm){
  addform(values){
      this.slist= {
      firstname:values.firstname,
      middlename:values.middlename,
      lastname:values.lastname,
      depname:values.depname
    }
if(values.firstname.length!==0 && values.middlename.length!==0 && values.lastname.length!==0 && values.depname.length!==0)
{
    this.submitted=true;
    this.stdlistser.getStdList(this.slist);
    // console.log("values"+ this.slist.firstname);
this.slistarray=this.stdlistser.getFinalList();
}
else{
  alert ("please fill all fields and submit");
}
  }

}
