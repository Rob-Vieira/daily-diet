// import { ArrowUUpRight } from "phosphor-react-native";
import { Icon as Icons } from "@components/Icon";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type PercentStylesProps = {
    isInDiet: boolean;
}

const Container = styled.View<PercentStylesProps>`
    width: 100%;
    position: relative;
    justify-content: center;
    align-items: center;
    padding: 20px 16px;
    border-radius: 8px;
    background-color: ${({ theme, isInDiet }) => isInDiet ? theme.colors.green_light : theme.colors.red_light };
    margin-bottom: 40px;
`;

const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.font_size.xxl}px;
        font-family: ${theme.font_family.bold};
        color: ${theme.colors.gray_1};
    `}
    margin-bottom: 2px
`;

const Subtitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.font_size.s}px;
        font-family: ${theme.font_family.regular};
        color: ${theme.colors.gray_2};
    `}
`;

const ButtonIcon = styled(TouchableOpacity)`
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 8px;
    right: 8px;
`;

const Icon = styled(Icons).attrs<PercentStylesProps>(({theme, isInDiet}) => ({
    color: isInDiet ? theme.colors.green_dark : theme.colors.red_dark,
    size: 24
}))``;

export {
    Container,
    Title,
    Subtitle,
    ButtonIcon,
    Icon
};