import styled, { css } from "styled-components/native";

const Container = styled.View`
    gap: 8px;
    margin-bottom: 32px;
`;

const Date = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.font_family.bold};
        font-size: ${theme.font_size.lg}px;
        color: ${theme.colors.gray_1};
    `}
`;

export {
    Container,
    Date,
};