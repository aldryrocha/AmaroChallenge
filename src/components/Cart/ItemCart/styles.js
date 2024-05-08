import styled from "styled-components"

export const CartItem = styled.li`
    padding: 15px 0;
    border: 2px solid var(--color-gray);    
    margin-bottom: 1rem;
    width: 100%;
    display: inline-flex;
`;

export const CartItemContent = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding-right: 0;
    width: calc(100% - 120px);
`

export const CartItemContentInner = styled.div`
    width: calc(100% - 120px);
    flex-flow: row wrap;
    align-items: center;
`
export const CartItemContentInfos = styled.div`
    width: 120px;
`
export const CartItemImg = styled.img`
    width: 125px;
`