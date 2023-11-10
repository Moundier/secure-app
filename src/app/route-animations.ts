import { 
    trigger,
    transition, 
    style, 
    query, 
    group, 
    animateChild, 
    animate, 
    keyframes
} from "@angular/animations";

// Basic Animation In Angular

export const fader = trigger('routeAnimations', [
    transition('* <=> *', [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                left: 0,
                width: '100%',
                opacity: 0,
                transformer: 'scale(0) translateY(100%)'
            }),
        ]),
        query(':enter', [
            animate('600ms ease',
                style({ opacity: 1, transform: 'scale(1) translateY(0)' })
            )
        ]),
    ]),
]);

export const stepper = trigger('routeAnimations', [

]);

export const transformer = trigger('routeAnimations', [
    
]);

export const slider = trigger('routeAnimations', [
    
]);
