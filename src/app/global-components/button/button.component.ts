import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() title: string;
  @Input() icon: string;
  @Input() outlined: boolean = false;
  @Input() color: string;
  @Input() bgColor: string;

  @Output() onClick = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  get buttonClasses(): string {
    let classes = 'button';
    classes += this.outlined ? ' outlined' : '';
    classes += this.color ? ` ${this.color}` : '';
    classes += this.bgColor ? ` bg-${this.bgColor}` : '';
    return classes;
  }

  get iconClasses(): string {
    let classes = 'material-icons';
    classes += this.outlined ? ' outlined' : '';
    classes += this.color ? ` ${this.color}` : '';
    return classes;
  }
}
