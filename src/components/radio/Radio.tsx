import React, {ChangeEvent} from 'react';
import styled from 'styled-components';
import { base } from '../../styles/styles.base';

const Input = styled.input`
    user-select: none; 
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
`;

const CheckMark = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
`;

interface ImageProps {
    background?: string;
}

const Image = styled.span<ImageProps>`
    display: block;
    width: 70px;
    height: 50px;
    border: 3px solid transparent;
    border-radius: ${base.borders.radius};
    margin-bottom: ${base.spacing.sm};
    background: ${props => props.background || props.theme.colors.backgroundSecondary}
`;

const Label = styled.label`
    display: inline-block;
    position: relative;
    cursor: pointer;
    user-select: none;
    padding: ${base.spacing.sm};
    border-radius: ${base.borders.radius};
    & ${Input}:checked ~ ${Image} { 
        border: 3px solid ${props => props.theme.colors.primary};
    }
`;

export interface FancyRadioProps {
    name: string,
    label: string,
    value: string,
    checked: boolean,
    autoFocus?: boolean,
    background?: string,
    onChange: (event: ChangeEvent) => void
}

export const Radio = (props: FancyRadioProps) => {
    const { autoFocus, background, checked, name, label, value, onChange } = props;
    return (
        <Label>
            <Input type="radio" name={name} checked={checked}
                autoFocus={autoFocus}
                value={value} onChange={e => onChange(e)} />
            <Image background={background} />
            <CheckMark />
            {label}
        </Label>
    );
};