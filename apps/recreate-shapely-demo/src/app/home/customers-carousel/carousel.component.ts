import { AfterViewInit, Component, ContentChildren, Directive, ElementRef, Input, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { CarouselDirective } from './carousel.directive';
import { animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style } from "@angular/animations";

@Directive({
    selector: '.carousel-item'
})
export class CarouselItemElement { }

@Component({
    selector: 'recreate-shapely-demo-carousel',
    exportAs: 'recreate-shapely-demo-carousel',
    template: `
        <section class="carousel-wrapper" [ngStyle]="carouselWrapperStyle">
            <ul class="carousel-inner" #carousel>
                <li *ngFor="let item of items;" class="carousel-item">
                    <ng-container [ngTemplateOutlet]="item.tpl"></ng-container>
                </li>
            </ul>
        </section>
        <div *ngIf="showControls" style="margin-top: 1em">
            <button (click)="prev()" class="btn btn-default">Prev</button>
            <button (click)="next()" class="btn btn-default">Next</button>
        </div>
  `,
    styles: [`
        ul {
            list-style: none;
            margin: 0;
            padding: 0;
            width: 6000px;
        }
  
        .carousel-wrapper {
            overflow: hidden;
        }
  
        .carousel-inner {
            display: flex;
        }
  `]
})
export class CarouselComponent implements AfterViewInit {
    @ContentChildren(CarouselDirective) items: QueryList<CarouselDirective>;
    @ViewChildren(CarouselItemElement, { read: ElementRef }) private itemsElements: QueryList<ElementRef>;
    @ViewChild('carousel', { static: false }) private carousel: ElementRef;
    @Input() timing = '250ms ease-in';
    @Input() showControls = true;
    private player: AnimationPlayer;
    private itemWidth: number;
    private currentSlide = 0;
    carouselWrapperStyle = {};

    next() {
        if (this.currentSlide + 1 === this.items.length) return;
        this.currentSlide = (this.currentSlide + 1) % this.items.length;
        const offset = this.currentSlide * this.itemWidth;

        const myAnimation: AnimationFactory = this.buildAnimation(offset);
        this.player = myAnimation.create(this.carousel.nativeElement);
        this.player.play();
    }

    private buildAnimation(offset) {
        return this.builder.build([
            animate(this.timing, style({ transform: `translateX(-${offset}px)` }))
        ]);
    }

    prev() {
        if (this.currentSlide === 0) return;
        this.currentSlide = ((this.currentSlide - 1) + this.items.length) % this.items.length;
        const offset = this.currentSlide * this.itemWidth;

        const myAnimation: AnimationFactory = this.buildAnimation(offset);
        this.player = myAnimation.create(this.carousel.nativeElement);
        this.player.play();
    }

    constructor(private builder: AnimationBuilder) {
    }

    ngAfterViewInit() {
    //     // For some reason only here I need to add setTimeout, in my local env it's working without this.
    //     setTimeout(() => {
    //         this.itemWidth = this.itemsElements.first.nativeElement.getBoundingClientRect().width;
    //         this.carouselWrapperStyle = {
    //             width: `${this.itemWidth}px`
    //         }
    //     });
    }

}