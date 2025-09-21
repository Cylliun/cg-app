import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  template: `

  <form action="" class="space-y-4">
    <div class="bg-gray-300 rounded-lg items-center gap-2">
      <input
      type="email"
      name="Email"
      placeholder="Email"
      class="w-full bg-transparent text-lg rounded-lg text-text-primary placeholder:p-4 placeholder:italic placeholder:text-base"
      value=""
      />
    </div>

    <div class="bg-gray-300  rounded-lg items-center gap-2">
      <input
      type="password"
      name="senha"
      placeholder="Senha"
      class="w-full bg-transparent text-lg rounded-lg text-text-primary placeholder:p-4 placeholder:italic placeholder:text-base"
      value=""
      />
    </div>

    <div class="flex justify-between items-center">
      <div class="space-x-1">
        <input
        type="checkbox"
        name="rememberMe"
        id="rememberMe"
        class=""
      />
      <label for="rememberMe" class="">Remember me</label>
      </div>
      <p class=""><a routerLink="auth/forgot-password">forgot password?</a></p>
    </div>

    <button class="bg-background-app font-medium w-full rounded-xl p-0.25 hover:bg-button-hover"><a routerLink="/entrando">Login</a></button>

  </form>

  `,
  styles: ``
})
export class LoginComponent {

}
