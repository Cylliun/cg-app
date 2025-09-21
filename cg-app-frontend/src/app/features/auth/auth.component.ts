import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from "@angular/router";
import { AuthTabsComponent } from "./auth-tabs/auth-tabs.component";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterOutlet, AuthTabsComponent],
  template: `
    <div class="min-w-screen flex justify-center items-center h-150">
      <div class="space-x-4 opacity-40 rounded-xl border-0 shadow-md max-w-full w-sm p-6 bg-white">
        <app-auth-tabs
          [active]="activeTable()"
          (tabChange)="setTab($event)"
        />
        <h1 class="text-2xl font-bold text-center mb-2">Forms login</h1>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: ``
})
export class AuthComponent {

    private router = inject(Router)
    private route = inject(ActivatedRoute)

    constructor() {
      this.route.url.subscribe(() => {
        const child = this.route.firstChild;
        const path = child?.snapshot.url[0]?.path as 'login' | 'register' | undefined;
        if (path === 'login' || path === 'register') {
          this.activeTable.set(path);
        }
      })
      
    }

  activeTable = signal< 'login' | 'register'>('login');

  isLoginMode = signal(true);
  isLoading = signal(false);
  message = signal<string | null>(null);

  changeMode () {
    this.isLoginMode.update((current) => !current);
    this.message.set(null);
  }

  setTab (tab: 'login' | 'register') {
    this.activeTable.set(tab)
    this.router.navigate([tab], { relativeTo: this.route });
  }

}
