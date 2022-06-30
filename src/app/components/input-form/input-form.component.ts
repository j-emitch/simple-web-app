import { Component } from '@angular/core'

@Component({
  selector: 'app-input-form',
  templateUrl: 'input-form.component.html',
  styleUrls: ['input-form.component.css']
})
export class InputFormComponent{
  public apiChoice?: string = '--';
  public knownApiLists = [
    {key: '--', text: 'Please choose an API to hit'},
    {key: 'chuck-norris-api', text:'The Chuck Norris API'}
  ];
  private queryCnt = 0;

  public get diagnostic() {
    return JSON.stringify({
      apiChoice: this.apiChoice,
      queryCount: this.queryCnt
    });
  }

  public onQuery() {
    this.queryCnt++;
  }
}
