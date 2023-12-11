import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-complex-form',
  standalone: true,
  imports: [CommonModule, MatCardModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './complex-form.component.html',
  styleUrl: './complex-form.component.scss'
})
export class ComplexFormComponent implements OnInit {

  mainForm!: FormGroup;


  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
   this.initMainForm();
  }

  initMainForm(): void {
    this.mainForm = this.formBuilder.group({});
  }

  onSubmitForm() {

  }
}
