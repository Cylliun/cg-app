import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-auth-tabs',
  standalone: true,
  imports: [],
  template: `
    <div class="flex justify-center">
      <button
        class="px-4 py-2 rounded hover:bg-sky-100"
        [class.bg-blue-500]="active() === 'login'"
        (click)="setTab('login')"
      >
        Login
      </button>
      <button
        class="px-4 py-2 rounded hover:bg-sky-100"
        [class.bg-blue-500]="active() === 'register'"
        (click)="setTab('register')"
      >
        Register
      </button>
    </div>
  `,
  styles: ``
})
export class AuthTabsComponent {

  active = input< 'login' | 'register'>('login');
  tabChange = output< 'login' | 'register'>();

  setTab(tab: 'login' | 'register') {
    this.tabChange.emit(tab);
  }
}
