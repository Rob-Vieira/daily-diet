import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

type Props = {
    toGrow: boolean;
}

const Container = styled.View<Props>`
    gap: 5px;
    ${({ toGrow }) => toGrow && 'flex: 1;'}
`;

const InputText = styled(TextInput)`
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
    InputText
}