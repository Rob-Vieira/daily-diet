import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.gray_7};
    padding: 24px;
`;

export {
    Container
};