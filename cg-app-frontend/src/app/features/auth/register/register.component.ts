import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  imports: [],
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

    <button class="bg-background-app font-medium w-full rounded-xl p-0.25 hover:bg-button-hover"><a routerLink="/entrando">Login</a></button>

  </form>

  `,
  styles: ``
})
export class RegisterComponent {

}
