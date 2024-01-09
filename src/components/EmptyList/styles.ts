import styled, { css } from "styled-components/native";

const Container = styled.View`
    padding: 12px;
    border-width: px;
    border-color: ${({theme}) => theme.colors.gray_2};
    border-radius: 6px;
`;

const Description = styled.Text`
    text-align: center;
    ${({theme}) => css`
        font-family: ${theme.font_family.regular};
        font-size: ${theme.font_size.s}px;
        color: ${theme.colors.gray_2};
    `}
`;

export {
    Container,
    Description
};