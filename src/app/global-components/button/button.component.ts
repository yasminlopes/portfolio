  @Input() title: string;
  @Input() icon: string;
  @Input() outlined: boolean = false;
  @Input() color: string;
  @Input() bgColor: string;

  @Output() onClick = new EventEmitter<void>();

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
