import { TouchableOpacity} from "react-native";
import styled, { css } from "styled-components/native";

const Container = styled(TouchableOpacity).attrs({
    activeOpacity: 1
})`
    gap: 5px;
    flex: 1;
`;

const Value = styled.Text`
    border-color: ${({ theme }) => theme.colors.gray_5};
    border-width: 1px;
    border-radius: 6px;
    padding: 14px;

    ${({ theme }) => css`
        font-size: ${theme.font_size.m}px;
        font-family: ${theme.font_family.regular};
        color: ${theme.colors.gray_1};
    `}
    
`;

export {
    Container,
    Value
}