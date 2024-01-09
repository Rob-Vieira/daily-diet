import styled, { css } from "styled-components/native";

type Props = {
    inDiet: boolean;
}

const Container = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 14px 16px 14px 12px;
    border-width: 1px;
    border-color: ${({theme}) => theme.colors.gray_5};
    border-radius: 6px;
`;

const Hour = styled.Text`
    padding-right: 12px;
    margin-right: 12px;
    border-right-width: 1px;
    border-color: ${({theme}) => theme.colors.gray_5};

    ${({theme}) => css`
        font-family: ${theme.font_family.regular};
        font-size: ${theme.font_size.s}px;
        color: ${theme.colors.gray_1};
    `}
`;

const Title = styled.Text`
    flex: 1;

    ${({theme}) => css`
        font-family: ${theme.font_family.regular};
        font-size: ${theme.font_size.m}px;
        color: ${theme.colors.gray_2};
    `}
`;

const Diet = styled.View<Props>`
    width: 14px;
    height: 14px;
    border-radius: 100px;
    background-color: ${({ theme, inDiet }) => inDiet ? theme.colors.green_mid : theme.colors.red_mid};
`;

export {
    Container,
    Hour,
    Title,
    Diet
};