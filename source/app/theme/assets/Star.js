// Core
import React, { Component } from 'react';

// Instruments
import { withSvg } from '../../instruments/withSvg';

class Star extends Component {
    render() {
        const { hover, checked, disabled, color1, color2, color3 } = this.props;

        const fill = disabled ? color3 : hover ? color1 : color2;

        return checked ? (
            <g>
                <path
                    d = 'M88 31.3L59.9 28l-13-26.6C46.6.5 45.8 0 45 0s-1.6.5-1.9 1.4L30.1 28 2 31.3c-1.9 0-2.7 2.4-1.2 3.5L23 53.3l-6.4 29.9c-.4 1.4.6 2.6 1.9 2.6.4 0 .8-.1 1.1-.4L45 70.2l25.4 15.2c.4.3.8.4 1.1.4 1.2 0 2.3-1.2 1.9-2.6L67 53.3l22.2-18.5c1.5-1.1.7-3.5-1.2-3.5z'
                    fill = { color1 }
                />
            </g>
        ) : (
            <g>
                <path
                    d = 'M61.6 51.4l5.7 26.4L45 64.5 22.7 77.8l5.7-26.4-19.3-16 24.2-2.8L45 8.7l11.6 23.8 24.2 2.8-19.2 16.1zM88 31.3L59.9 28l-13-26.6C46.6.5 45.8 0 45 0s-1.6.5-1.9 1.4L30.1 28 2 31.3c-1.9 0-2.7 2.4-1.2 3.5L23 53.3l-6.4 29.9c-.4 1.4.6 2.6 1.9 2.6.4 0 .8-.1 1.1-.4L45 70.2l25.4 15.2c.4.3.8.4 1.1.4 1.2 0 2.3-1.2 1.9-2.6L67 53.3l22.2-18.5c1.5-1.1.7-3.5-1.2-3.5z'
                    fill = { fill }
                />
            </g>
        );
    }
}

export default withSvg({
    viewBoxWidth:  90,
    viewBoxHeight: 85.8,
    width:         19,
    height:        19,
})(Star);
