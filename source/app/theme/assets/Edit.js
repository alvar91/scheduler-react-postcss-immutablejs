// Core
import React, { Component } from 'react';

// Instruments
import { withSvg } from '../../instruments/withSvg';

class Edit extends Component {
    render() {
        const { hover, checked, color1, color2 } = this.props;

        const fill = checked || hover ? color1 : color2;

        return (
            <g>
                <path
                    d = 'M19.4 3.1L18 1.7 8.6 11l1.4 1.4 9.4-9.3zM19.3.3l1.4 1.4c.4.4.4 1 0 1.4L10.5 13.3c-.1.1-.2.2-.3.2l-2.9 1c-.3.1-.7-.1-.8-.4v-.4l1-2.9c0-.1.1-.2.2-.3L17.9.3c.4-.4 1-.4 1.4 0zM17 9h1v9.5c0 1.4-1.1 2.5-2.5 2.5h-13C1.1 21 0 19.9 0 18.5v-13C0 4.1 1.1 3 2.5 3H12v1H2.5C1.7 4 1 4.7 1 5.5v13c0 .8.7 1.5 1.5 1.5h13c.8 0 1.5-.7 1.5-1.5V9z'
                    fill = { fill }
                />
            </g>
        );
    }
}

export default withSvg({
    viewBoxWidth:  21,
    viewBoxHeight: 21,
    width:         19,
    height:        19,
})(Edit);
