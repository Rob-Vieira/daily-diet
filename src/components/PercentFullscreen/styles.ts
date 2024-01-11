import { Icon } from "@components/Icon";
import { PercentStylesProps } from "@components/Percent/styles";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

const Container = styled.View`
    position: relative;
    justify-content: center;
    align-items: center;
    padding: 24px;
`;

const BackButton = styled(TouchableOpacity)`
    position: absolute;
    top: 24px;
    left: 24px;
`;

const BackIcon = styled(Icon).attrs<PercentStylesProps>(({ theme, isInDiet }) => ({
    color: isInDiet ? theme.colors.green_dark : theme.colors.red_dark,
    size: 24
}))``;

const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.font_size.xxl}px;
        font-family: ${theme.font_family.bold};
        color: ${theme.colors.gray_1};
    `}
    margin-top: 12px;
    margin-bottom: 2px
`;

const Subtitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.font_size.s}px;
        font-family: ${theme.font_family.regular};
        color: ${theme.colors.gray_2};
    `}
`;

export {
    Container,
    BackButton,
    BackIcon,
    Title,
    Subtitle
};