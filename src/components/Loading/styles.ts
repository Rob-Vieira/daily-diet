import { ActivityIndicator, Image } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.gray_7};
    gap: 20px;
`;

const LoadingIndicator = styled(ActivityIndicator).attrs(({ theme }) => ({
    color: theme.colors.gray_1,
    size: 'large',
}))``;

const Logo = styled(Image)`
    width: 82px;
    height: 37px;
`;

export {
    Container,
    LoadingIndicator,
    Logo
};