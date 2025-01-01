import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ValidatorService } from '../../services/validator.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../../environments/environments';
import { HoverStringComponent } from '../../../shared/components/hoverString/hoverString.component';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    HoverStringComponent,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  private formBuilder = inject(FormBuilder);
  private validatorService = inject(ValidatorService);
  private http = inject(HttpClient);

  public myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validatorService.emailPattern),
      ],
    ],
    message: ['', [Validators.required]],
  });

  public isLoading = false;
  public isSubmitted = false;
  public failed = false;

  fieldIsValid(field: string): boolean | null {
    return this.validatorService.fieldIsValid(this.myForm, field);
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const error of Object.keys(errors)) {
      switch (error) {
        case 'required':
          return `Este campo es requerido`;
        case 'pattern':
          return `El formato del correo es incorrecto`;
      }
    }
    return null;
  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;

    const formData = this.myForm.value;
    formData.access_key = environment.WEB3FORM_KEY;

    this.http.post('https://api.web3forms.com/submit', formData).subscribe(
      (response: any) => {
        console.log('Form submitted successfully', response);
        this.isSubmitted = true;
        this.isLoading = false;
        this.myForm.reset();
      },
      (error: any) => {
        console.error('Error submitting form', error);
        this.isLoading = false;
        this.failed = true;
      }
    );
  }
}
