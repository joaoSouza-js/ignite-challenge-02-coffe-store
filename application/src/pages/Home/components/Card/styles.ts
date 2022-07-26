import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    padding: 0 1.25rem 2rem 1.25rem;
    border-radius: 8px 36px 8px 36px;
    background-color: ${props => props.theme.colors.Card};

    img{
        margin-top: -1.25rem;

    }
    strong{
        margin-top: 1rem;
        font-size: 1.25rem;
        color:  ${props => props.theme.colors["SubTitle"]};
        font-family: ${props => props.theme.fonts.Ballo};;

    }
    p{
        margin-top: .5rem;
        font-size: 0.875rem;
        line-height: 1.125rem;
        color:  ${props => props.theme.colors["Label"]}
    }
  
`

export const Category = styled.span`
        display: inline-block;
        
        margin-top: 1rem;
        font-size: 0.625rem;
        font-weight: 700;
        padding: .25rem .5rem;
        border-radius: 100px;
        color:  ${props => props.theme.colors["yellow-600"]};
        background: ${props => props.theme.colors["yellow-100"]};
`
export const Actions = styled.div`
    margin-top: 2.281rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.437rem;

    svg{
        padding: .5rem;
        
        width: 2.375rem;
        height: 2.375rem;
        border-radius: 6px;
        color:  ${props => props.theme.colors["Card"]};;
        background-color: ${props => props.theme.colors["purple-300"]};
    }
`
export const InputArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.375rem;
    width: 4rem;
    background: ${props => props.theme.colors.Button};
    border-radius: 6px;

    input{
        text-align: center;
        width: 20px;
        border: none;
        background: ${props => props.theme.colors.Button};


        &::-webkit-inner-spin-button, 
        &::-webkit-outer-spin-button { 
        -webkit-appearance: none;
        }
    }
    button{
        font-size: 1rem;
        background: ${props => props.theme.colors.Button};
        color: ${props => props.theme.colors["purple-300"]};;
    }
`
export const Separator = styled.div`
    display: flex;
    column-gap: .5rem
`
