import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{ color: string }>`
    color: ${({ color }) => color};
    font-size: 16px;
    font-weight: bold;
`;

const Label: React.FC<LabelProps> = ({ children, color = 'black', ...props }) => {
    return <StyledLabel color={color} {...props}>{children}</StyledLabel>;
};

export default Label;
