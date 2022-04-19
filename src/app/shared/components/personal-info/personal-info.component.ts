import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { PersonalInfo } from '../../models';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalInfoComponent {
  @Output() payOrderClick = new EventEmitter<void>();
  @Input() information: PersonalInfo;
  @Input() price: number;

  payOrder(): void {
    this.payOrderClick.emit();
  }
}
