import styled from "styled-components"

export const Controls = styled.div`
    display: inline-flex;
    text-align: center;
`

export const Button = styled.button`
    background: none;
    border: none;
    border: 1px solid var(--color-gray);
    width: 25px;
    font-weight: 600;
    font-size: 1.2rem;
`;

export const AmountValue = styled.span`
    border: 1px solid var(--color-gray);
    width: 25px;
    line-height: 25px;
    border-left:0;
    border-right:0;
    font-weight: 600;
`;
