import React from 'react';
import { COLOR_PALETTE } from '../lib/Constants';

interface IProps {
    color: string;
    onClick: (color: string) => void
}

export const ColorPicker = ({ color, onClick }: IProps) => {
    return (
        <label>
            <input
                type="radio"
                name="color"
                value={color}
                defaultChecked={COLOR_PALETTE.dodgerBlue === color}
                onClick={(e) => onClick(color)} />
            <span
                className="swatch"
                style={{
                    backgroundColor: color,
                    borderColor: color,
                    borderWidth: 1,
                    borderStyle: 'solid'
                }}>
            </span>
        </label>
    );
};