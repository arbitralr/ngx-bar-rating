import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BarRating } from './bar-rating';
import { BarRatingPipe } from './bar-rating.pipe';
import { BarRatingUnit, BarRatingUnitActive, BarRatingUnitFraction, BarRatingUnitSelected } from './bar-rating-unit';

@NgModule({
  declarations: [
    BarRating,
    BarRatingPipe,
    BarRatingUnit,
    BarRatingUnitActive,
    BarRatingUnitSelected,
    BarRatingUnitFraction
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BarRating,
    BarRatingUnit,
    BarRatingUnitActive,
    BarRatingUnitSelected,
    BarRatingUnitFraction
  ]
})
export class BarRatingModule {
}
