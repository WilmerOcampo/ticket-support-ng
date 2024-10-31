import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input({required: true}) title!: string;
  @Input({required: true}) className!: string;
  @Input({required: true}) icon!: string;

}
