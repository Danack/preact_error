import { h, render } from "preact";


import { BoopPanel } from "./sound_button";


import initByClass from "widgety";
import type { WidgetClassBinding } from "widgety";


let panels: WidgetClassBinding[] = [
    {
         class: 'boop_panel',
         component: BoopPanel
    },
];

initByClass(panels, h, render);

// startMessageProcessing();

console.log("bootstrap finished");



