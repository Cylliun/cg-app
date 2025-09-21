import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button onclick="touchButton()">
      {{ text() }}
    </button>
  `,
  styles: ``
})
export class ButtonComponent {
  text: WritableSignal<string> = signal("confirm");

  touchButton() {
    this.text.update((current) =>
      current === "confirm" ? "loading..." : "confirm"
    );
  }

}
