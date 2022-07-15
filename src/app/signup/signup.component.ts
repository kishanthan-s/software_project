import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import Validation from '../validation';





@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
   
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {

    
   }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],

        email: ['', [Validators.required, Validators.email]],

        phone_number: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10)
          ]
        ],

        nic_number: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(12)
          ]
        ],

        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],

        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      
       
       
        
      },
     
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
     
    );
  }

  
 


  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit()
  {this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
    this.router.navigate(['/order']); 
    
  }


  


  
  }

  // custom validator to check that two fields match


