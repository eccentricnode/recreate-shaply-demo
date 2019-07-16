import { Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: '[recreateShapelyDemoCarouselDirective]'
})
export class CarouselDirective {

    constructor( public tpl : TemplateRef<any>) {}
}