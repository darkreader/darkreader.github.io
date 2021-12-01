// @ts-check

import './backers-graph.js';
import {
    createHTMLElement as html,
} from './utils.js';

const safariURL = 'https://apps.apple.com/us/app/dark-reader-for-safari/id1438243180#?platform=iphone';

const htmlText = `
<h2 class="heading">
    New app
</h2>
<section class="i">
    <a class="image-link" href="${safariURL}">
        Dark Reader for iPhone, iPad and Mac
    </a>
</section>
`;

const cssText = `
a {
    color: var(--color-text);
    outline: none;
    transition: color 125ms;
}
a:hover {
    color: var(--color-text-hover);
}
:host {
    width: 16rem;
}
.heading {
    background-color: #141e2477;
    border-radius: 0.25rem;
    color: var(--color-highlight);
    display: inline-block;
    line-height: 1.25rem;
    margin: 0 0 0.75rem 3rem;
    -webkit-text-stroke: 0.0625rem;
    text-transform: uppercase;
}
.heading::before {
    background-image: url(/images/apple-logo-white.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    bottom: -0.125rem;
    content: "";
    display: inline-block;
    filter: brightness(0.7) sepia(1) hue-rotate(-20deg);
    height: 1.75rem;
    position: relative;
    width: 1.75rem;
}
section {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 0.75rem;
    position: relative;
}
.image-link {
    background-image: url(/images/ios-phone.svg);
    height: 32.5rem;
    position: relative;
    text-indent: -999rem;
    width: 16rem;
}
.image-link::before {
    background-image: url(/images/ios-hand.gif);
    background-size: 100%;
    content: "";
    height: 34.25rem;
    left: -4.8rem;
    pointer-events: none;
    position: absolute;
    top: 6.55rem;
    width: 34.25rem;
}
.image-link::after {
    background-image: url(/images/ios-phone-hover.svg);
    background-size: 100%;
    content: "";
    height: 34.33rem;
    left: -0.5rem;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: -0.75rem;
    transition: opacity 250ms;
    width: 16.95rem;
}
/*
.image-link:hover {
    filter: drop-shadow(0 0 0.125rem var(--color-text-hover)) drop-shadow(0 0 0.25rem var(--color-text));
}
*/
.image-link:hover::after {
    opacity: 1;
}
/*
.image-link::after {
    background-image: url(/images/ios-hand-left.gif);
    left: -13.2rem;
    top: 6.55rem;
}
*/
`;

class IOSSideElement extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        const style = html('style', null, cssText);
        shadowRoot.append(style);
        style.insertAdjacentHTML('afterend', htmlText);
    }
}

customElements.define('darkreader-ios-side', IOSSideElement);