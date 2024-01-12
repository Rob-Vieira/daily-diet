import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type IconProps = {
    type: 'SUCCESS' | 'DANGER';
}

type ButtonProps = {
    active: boolean;
}

const Container = styled.View`
    gap: 5px;
`;

const Row = styled.View`
    flex-direction: row;
    gap: 8px;
`;

const Button = styled(TouchableOpacity)`
    padding: 16px;
    border-radius: 6px;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;

    ${({ theme }) => css`
        background-color: ${theme.colors.gray_6};
        border-width: 1px;
        border-color: ${theme.colors.gray_6};
    `}
`;

const ButtonTitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.font_size.s}px;
        font-family: ${theme.font_family.bold};
        color: ${theme.colors.gray_1};
    `}
`;

const Icon = styled.View<IconProps>`
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background-color: ${({ theme, type }) => type === 'SUCCESS' ? theme.colors.green_dark : theme.colors.red_dark};
`;

const ButtonDanger = styled(Button)<ButtonProps>`
    ${({ theme, active }) => active && css`
        background-color: ${theme.colors.red_light};
        border-width: 1px;
        border-color: ${theme.colors.red_dark};
    `}
`;

const ButtonSuccess = styled(Button)<ButtonProps>`
    ${({ theme, active }) => active && css`
        background-color: ${theme.colors.green_light};
        border-width: 1px;
        border-color: ${theme.colors.green_dark};
    `}
`;



export {
    Container,
    Row,
    Button,
    ButtonTitle,
    Icon,
    ButtonDanger,
    ButtonSuccess,
};