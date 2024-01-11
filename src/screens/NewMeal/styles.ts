import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.gray_5};
`;

const Content = styled.View`
    padding: 40px 24px 24px;
    background-color: ${({ theme }) => theme.colors.gray_7};
    flex: 1;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    justify-content: space-between;
`;

const Form = styled.View`
    gap: 24px;
`;

export {
    Container,
    Content,
    Form
}