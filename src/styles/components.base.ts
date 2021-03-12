import styled from 'styled-components';
 
export const Title = styled.h1`
    font-weight: bold;
    text-align: center;
    font-size: 80px;
    line-height: 1.05;
    font-weight: 600;
    letter-spacing: -.015em;
    margin-top: 0;
    margin-bottom: 0;
`;

export const Text = styled.p`
    color: ${props => props.theme.colors.fontSecondary}
`;
