import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type Props = {
    inDiet: boolean;
}

const Container = styled(SafeAreaView)`
    flex: 1;
    justify-content: center;
    align-items: center;
    gap: 24px;
    padding: 24px;
`;

const Header = styled.View`
    gap: 8px;
    align-items: center;
`;

const Title = styled.Text<Props>`
    ${({ theme, inDiet }) => css`
        font-family: ${theme.font_family.bold};
        font-size: ${theme.font_size.xl}px;
        color: ${ inDiet ? theme.colors.green_dark : theme.colors.red_dark };
    `}
`;

const Subtitle = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.font_family.regular};
        font-size: ${theme.font_size.m}px;
        color: ${ theme.colors.gray_1 };
    `}
    text-align: center;
`;

const Highlight = styled(Subtitle)`
    font-family: ${({theme}) => theme.font_family.bold};
`;

const Ilustration = styled(Image)`
    width: 224px;
    height: 288px;
`;

export {
    Container,
    Header,
    Title,
    Subtitle,
    Highlight,
    Ilustration
};