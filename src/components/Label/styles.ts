import styled, { css } from "styled-components/native";

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.font_size.s}px;
        font-family: ${theme.font_family.bold};
        color: ${theme.colors.gray_2};
    `}
`;