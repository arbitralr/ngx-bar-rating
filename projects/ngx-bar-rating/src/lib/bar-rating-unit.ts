import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[brUnit], [br-unit]'
})
export class BarRatingUnit {
  constructor(public template: TemplateRef<any>) {
  }
}

@Directive({
  selector: '[brUnitActive], [br-unit-active]'
})
export class BarRatingUnitActive {
  constructor(public template: TemplateRef<any>) {
  }
}

@Directive({
  selector: '[brUnitSelected], [br-unit-selected]'
})
export class BarRatingUnitSelected {
  constructor(public template: TemplateRef<any>) {
  }
}

@Directive({
  selector: '[brUnitFraction], [br-unit-fraction]'
})
export class BarRatingUnitFraction {
  constructor(public template: TemplateRef<any>) {
  }
}
