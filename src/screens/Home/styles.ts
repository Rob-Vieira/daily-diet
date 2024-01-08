import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.gray_7};
    padding: 24px;
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