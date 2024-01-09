import styled, { css } from "styled-components/native";

export type StatisticalDataStylesProps = 'Default' | 'Success' | 'Danger'

type Props = {
    toGrow: boolean;
    type: StatisticalDataStylesProps;
}

const Container = styled.View<Props>`
    padding: 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    margin-bottom: 12px;
    ${({theme, toGrow, type}) => css`
        background-color: ${ type !== 'Default' ? (type === 'Success' ? theme.colors.green_light : theme.colors.red_light ) : theme.colors.gray_6};
        ${ toGrow && 'flex: 1;' }
    `}
`;

const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.font_size.xl}px;
        font-family: ${theme.font_family.bold};
        color: ${theme.colors.gray_1};
    `}
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
    Title,
    Subtitle
};