import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import { Observable, Subject, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-leaky',
  standalone: true,
  imports: [],
  template: `Observable: {{ value }}`,
  styleUrls: ['./leaky.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeakyComponent {
  private readonly unsubscribe$ = new Subject<void>();
  _changeDetectorRef = inject(ChangeDetectorRef);
  // observable leak example
  value: number | undefined;
  interval$: Observable<number> | undefined;

  ngOnInit(): void {
    this.interval$ = interval(1000);
    this.interval$.pipe(takeUntil(this.unsubscribe$)).subscribe((val) => {
      this.value = val;
      console.log(this.value);
      this._changeDetectorRef.markForCheck();
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
