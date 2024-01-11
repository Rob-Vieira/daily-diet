import { ButtonIcon } from "@components/ButtonIcon";
import styled, { css } from "styled-components/native";

const Container = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 24px;
`;

const Title = styled.Text`
    flex: 1;
    text-align: center;
    padding-right: 24px;
    
    ${({ theme }) => css`
        font-family: ${theme.font_family.bold};
        font-size: ${theme.font_size.lg}px;
        color: ${theme.colors.gray_1};
    `}
`;

const GoBack = styled(ButtonIcon).attrs(({ theme }) => ({
    size: 24,
    color: theme.colors.gray_2,
}))``;

export {
    Container,
    Title,
    GoBack
}