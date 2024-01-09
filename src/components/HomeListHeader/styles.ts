import styled, { css } from "styled-components/native";

const Container = styled.View`
    margin-bottom: 32px;
`;

const TextM = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.font_size.m}px;
        font-family: ${theme.font_family.regular};
        color: ${theme.colors.gray_1};
    `}
    margin-bottom: 8px;
`;

export {
    Container,
    TextM
};