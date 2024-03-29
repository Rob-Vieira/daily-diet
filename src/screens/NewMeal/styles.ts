import { InputDateTime } from "@components/InputDateTime";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.gray_5};
`;

const Content = styled(ScrollView).attrs(() => ({
    contentContainerStyle: {
        justifyContent: 'space-between',
        gap: 24,
    }
}))`
    padding: 40px 24px 24px;
    background-color: ${({ theme }) => theme.colors.gray_7};
    flex: 1;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

const Form = styled.View`
    gap: 24px;
`;

const TwoInLine = styled.View`
    flex-direction: row;
    gap: 24px;
`;

const DateTime = styled(InputDateTime)`
    flex: 1;
`;

export {
    Container,
    Content,
    Form,
    TwoInLine,
    DateTime
}