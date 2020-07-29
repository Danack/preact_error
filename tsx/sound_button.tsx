import useSound from 'use-sound';

const boopSfx = require("../sounds/boop.mp3");

import {h, Component} from "preact";

export interface BoopPanelProps {
    // api_url: string;
    // initialControlParams: object;
}

interface BoopPanelState {
    // motions: Array<Motion>;
}

const [play] = useSound(boopSfx);

export class BoopPanel extends Component<BoopPanelProps, BoopPanelState> {
    render(props: BoopPanelProps, state: BoopPanelState) {

        // @ts-ignore: I don't understand that error message.
        return <button onClick={play}>Boop!</button>;
    }
}

