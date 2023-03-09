  @Input() title: string;
  @Input() icon: string;
  @Input() outlined: boolean = false;
  @Input() color: string;
  @Input() bgColor: string;

  @Output() onClick = new EventEmitter<void>();
