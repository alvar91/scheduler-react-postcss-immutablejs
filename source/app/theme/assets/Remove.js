// Core
import React, { Component } from 'react';

// Instruments
import { withSvg } from '../../instruments/withSvg';

class Remove extends Component {
    render() {
        const { hover, disabled, color1, color2, color3 } = this.props;

        const fill = disabled ? color3 : hover ? color1 : color2;

        return (
            <g>
                <path
                    d = 'M53 49.5c1 1 1 2.6 0 3.5-.5.5-1.1.7-1.8.7-.6 0-1.3-.2-1.8-.7L26.9 30.4 4.3 53c-.5.5-1.1.7-1.8.7-.6 0-1.3-.2-1.8-.7-1-1-1-2.6 0-3.5l22.6-22.6L.7 4.3c-1-1-1-2.6 0-3.5 1-1 2.6-1 3.5 0l22.6 22.6L49.5.7c1-1 2.6-1 3.5 0 1 1 1 2.6 0 3.5L30.4 26.9 53 49.5z'
                    fill = { fill }
                />
            </g>
        );
    }
}

export default withSvg({
    viewBoxWidth:  53.8,
    viewBoxHeight: 53.8,
    width:         17,
    height:        17,
})(Remove);
