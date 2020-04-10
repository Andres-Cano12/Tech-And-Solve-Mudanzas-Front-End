import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `<div [class.disabled]="isLoaded">
  <div class="ctn-loading">
      <img src="/assets/img/loading.gif" alt="Cargando...">
  </div>
</div>`
})
export class AppLoaderComponent {

    @Input() isLoaded:boolean = false;

}
