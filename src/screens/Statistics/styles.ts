import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type Props = {
    isInDiet: boolean;
}

const Container = styled(SafeAreaView)<Props>`
    flex: 1;
    background-color: ${({ theme, isInDiet }) => isInDiet ? theme.colors.green_light : theme.colors.red_light};
`;

const Content = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.gray_7};
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    padding: 24px;
`;

const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.font_family.bold};
        font-size: ${theme.font_size.s}px;
        color: ${theme.colors.gray_1};
    `}

    text-align: center;
    margin-bottom: 24px
`;

const DoubleData = styled.View`
    flex-direction: row;
    gap: 12px;
`;

export {
    Container,
    Content,
    Title,
    DoubleData
};