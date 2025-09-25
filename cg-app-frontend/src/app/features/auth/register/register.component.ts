import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    
    <form action="" class="space-y-4">
      <div [formGroup]="form" class="bg-gray-300 rounded-lg items-center gap-2">
        <input
      type="text"
      name="FirstName"
      placeholder="First Name"
      class="w-full bg-transparent text-lg rounded-lg text-text-primary placeholder:p-4 placeholder:italic placeholder:text-base"
      value=""
      formControlName="firstName"
      />
    </div>
    <div *ngIf="form.controls.firstName.invalid && form.controls.firstName.touched" class="text-text-error text-sm">
      O primeiro nome é obrigatório.
    </div>

    <div [formGroup]="form" class="bg-gray-300 rounded-lg items-center gap-2">
        <input
      type="text"
      name="LastName"
      placeholder="Last Name"
      class="w-full bg-transparent text-lg rounded-lg text-text-primary placeholder:p-4 placeholder:italic placeholder:text-base"
      value=""
      formControlName="lastName"
      />
    </div>
    <div *ngIf="form.controls.lastName.invalid && form.controls.lastName.touched" class="text-text-error text-sm">
      O sobrenome é obrigatório.
    </div>

      <div [formGroup]="form" class="bg-gray-300 rounded-lg items-center gap-2">
        <input
      type="email"
      name="Email"
      placeholder="Email"
      class="w-full bg-transparent text-lg rounded-lg text-text-primary placeholder:p-4 placeholder:italic placeholder:text-base"
      value=""
      formControlName="email"
      />
    </div>

    <div *ngIf="form.controls.email.invalid && form.controls.email.touched" class="text-text-error text-sm">
      O email é obrigatório e deve ser válido.
    </div>

    <div [formGroup]="form" class="bg-gray-300  rounded-lg items-center gap-2">
      <input
      type="password"
      name="senha"
      placeholder="Senha"
      class="w-full bg-transparent text-lg rounded-lg text-text-primary placeholder:p-4 placeholder:italic placeholder:text-base"
      value=""
      formControlName="password"
      />
    </div>

    <div *ngIf="form.controls.password.invalid && form.controls.password.touched" class="text-text-error text-sm">
      A senha deve conter no mínimo 8 caracteres.
    </div>

    <div [formGroup]="form" class="bg-gray-300  rounded-lg items-center gap-2">
      <input
      type="password"
      name="confirmPassword"
      placeholder="Confirm Password"
      class="w-full bg-transparent text-lg rounded-lg text-text-primary placeholder:p-4 placeholder:italic placeholder:text-base"
      value=""
      formControlName="confirmPassword"
      />
    </div>

    <div *ngIf="form.hasError('passwordsMismatch') && form.controls.confirmPassword.touched" class="text-text-error text-sm">
      As senhas não coincidem.
    </div>

    <button type="submit" class="bg-background-app font-medium w-full rounded-xl p-0.25 hover:bg-button-hover"><a routerLink="/entrando">Register</a></button>

  </form>

  `,
  styles: ``
})
export class RegisterComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router)

  isLoading = signal(false);
  message = signal<string | null>(null);

  form = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(8), Validators.required]],
    confirmPassword: ['', [Validators.required]]
  }, { validators: this.PasswordValidators});

  private PasswordValidators(group: AbstractControl): ValidationErrors | null {
    const pass = group.get('password')?.value;
    const confirmPass = group.get('confirmPassword')?.value;
    return pass && confirmPass && pass === confirmPass ? null : { passwordsMismatch: true };
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

  }

}
