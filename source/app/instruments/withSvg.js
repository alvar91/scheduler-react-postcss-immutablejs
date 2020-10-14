// Core
import React, { Component } from 'react';
import { number } from 'prop-types';

// Instruments
import { getDisplayName } from './';

const decorateSvg = (
    { viewBoxWidth = 0, viewBoxHeight = 0, width = 0, height = 0 } = {},
    Enhanceable,
) => {
    class withSvg extends Component {
        static propTypes = {
            height: number.isRequired,
            width:  number.isRequired,
        };

        static defaultProps = {
            color1: '#f00',
            width,
            height,
        };

        state = {
            hover:   false,
            checked: false,
        };

        _getEnhanceableProps = () => {
            const enhanceableProps = Object.assign({}, this.state, this.props);

            delete enhanceableProps.width;
            delete enhanceableProps.height;

            return enhanceableProps;
        };

        _getSvgStyle = () => ({
            width:   this.props.width,
            height:  this.props.height,
            display: 'block',
        });

        _getWrapperStyle = () => {
            const { inlineBlock } = this.props;

            return {
                width:   this.props.width,
                height:  this.props.height,
                display: inlineBlock ? 'inline-block' : 'block',
            };
        };

        _handleMouseEnter = () => {
            this.setState({
                hover: true,
            });
        };

        _handleMouseLeave = () => {
            this.setState({
                hover: false,
            });
        };

        _handleClick = () => {
            this.setState(({ checked }) => ({
                checked: !checked,
            }));
        };

        render() {
            const { className, disabled } = this.props;
            const wrapperStyle = this._getWrapperStyle();
            const svgStyle = this._getSvgStyle();
            const enhanceableProps = this._getEnhanceableProps();
            const onClickAction = this.props.onClick || this._handleClick;

            return (
                <div
                    className = { className }
                    style = { wrapperStyle }
                    onClick = { onClickAction }
                    onMouseEnter = { disabled ? null : this._handleMouseEnter }
                    onMouseLeave = { disabled ? null : this._handleMouseLeave }>
                    <svg
                        style = { svgStyle }
                        version = '1.1'
                        viewBox = { `0 0 ${viewBoxWidth} ${viewBoxHeight}` }>
                        <Enhanceable { ...enhanceableProps } />
                    </svg>
                </div>
            );
        }
    }

    withSvg.displayName = `withSvg(${getDisplayName(Enhanceable)})`;

    return withSvg;
};

export const withSvg = (config) => (Enhanceable) => decorateSvg(config, Enhanceable);
