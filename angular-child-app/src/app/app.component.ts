import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';
  @Input() reactValue = '';
  @Input() buttonFontSize = '';
  @Input() buttonBorderRadius = '';
  @Input() questionFontSize = '';
  @Input() questionFontColor = '';
  @Input() QuesOptionFontSize = '';
  @Input() QuesOptionFontColor = '';
  // @Input() textColor = '';
  // @Input() borderColor = '';
  // @Input() borderColor = '';
  @Output('angular-input-event') evt = new EventEmitter<any>();
  inputValue = '';
  ngOnInit(){
    console.log(this);
    document.documentElement.style.setProperty("--button-border-radius", this.buttonBorderRadius ? this.buttonBorderRadius+'px' : '30px');
    document.documentElement.style.setProperty("--question-font-size", this.buttonFontSize ? this.buttonFontSize+'px' : '');
    document.documentElement.style.setProperty("--question-font-color", this.questionFontSize ? this.questionFontSize+'px' : 'blue');
    document.documentElement.style.setProperty("--QuesOption-font-size", this.questionFontColor ? this.questionFontColor : 'blue');
    document.documentElement.style.setProperty("--QuesOption-font-color", this.QuesOptionFontSize ? this.QuesOptionFontSize+'px' : 'blue');
    document.documentElement.style.setProperty("--QuesOption-font-color", this.QuesOptionFontColor ? this.QuesOptionFontColor : 'blue');
  }
  
  onKey(event: any) {
    this.inputValue = event.target.value;
    this.evt.emit(event.target.value);
    // document.dispatchEvent(new CustomEvent('angular-input-event', { detail: event.target.value }));
  }
}
