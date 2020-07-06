import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup, Validators } from '@angular/forms';  
// import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedOption: string="Today Onwards";
  public showDates:boolean = false;
  effectivedata = [
    "Today Onwards",
    "Specific Dates"
  ]
  repeatdata=[
    'Week',
    'Every Two weeks',
    'Every Three weeks'
  ]
  availabilityForm = new FormGroup({
    title: new FormControl('',Validators.required),
    effectiveDates: new FormControl('Today Onwards',Validators.required),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    repeatTime:new FormControl('Week'),
    // firstName:new FormControl('',Validators.required)
  });


  onSubmit() {
    if (this.availabilityForm.invalid) {
      console.log('fail')
    }
    else{
      console.log("Form Submitted!");
    }
  }
  
  dataLiney(e){
    if(e.target.value === 'Specific Dates'){
      this.showDates = true;
      this.availabilityForm.get('startDate').setValidators([Validators.required]);
      this.availabilityForm.get('startDate').updateValueAndValidity();
      
      
      
    }else{
      this.showDates = false;
      this.availabilityForm.get('startDate').clearValidators();
      this.availabilityForm.get('startDate').updateValueAndValidity();
    }
    

    }
  }

 

  
  





