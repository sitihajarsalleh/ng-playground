import {
  Component,
  OnInit,
  Input,
  HostBinding,
  AfterViewInit
} from "@angular/core";
import { getStyleSheet, Sheet } from "../../utils/sheet";

@Component({
  selector: "Box",
  template: `
    <ng-content></ng-content>
  `
})
export class BoxComponent implements OnInit, AfterViewInit {
  @Input() css: object;
  @Input() flexDirection: string;
  @Input() alignItems: string;
  @Input() alignContent: string;
  @Input() flexFlow: string;
  @Input() flexWrap: string;
  @Input() justifyContent: string;
  @HostBinding("class") className;
  public sheet: Sheet;

  constructor() {}

  ngOnInit() {
    const { css, ...other } = this;
    this.sheet = getStyleSheet({
      box: {
        display: "flex",
        ...css,
        ...other
      }
    });
  }

  ngAfterViewInit() {
    this.className = this.sheet.classes.box;
  }
}
