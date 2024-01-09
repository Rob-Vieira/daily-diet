import { Icon as Icons } from "@components/Icon";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonStyleProps = 'SOLID' | 'TRANSPARENT';

type Props = {
    type: ButtonStyleProps;
}

const Container = styled(TouchableOpacity)<Props>`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 12px;
    border-radius: 6px;
    border-width: 2px;
    padding: 16px 24px;

    ${({ theme, type }) => css`
        background-color: ${ type === 'TRANSPARENT' ? 'transparent' : theme.colors.gray_2};
        border-color: ${theme.colors.gray_2};
    `}
`;

const Title = styled.Text<Props>`
    ${({ theme, type }) => css`
        font-size: ${theme.font_size.s}px;
        font-family: ${theme.font_family.bold};
        color: ${ type === 'TRANSPARENT' ? theme.colors.gray_2 : theme.colors.white};
    `}
`;

const Icon = styled(Icons).attrs<Props>(({ theme, type }) => ({
    size: 18,
    color: type === 'TRANSPARENT' ? theme.colors.gray_2 : theme.colors.white
}))``;

export {
    Container,
    Title,
    Icon
};