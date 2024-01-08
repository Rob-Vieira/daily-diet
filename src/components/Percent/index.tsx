import {  Container, Subtitle, Title, ButtonIcon, Icon } from "./styles";

export function Percent(){
    return (
        <Container>
            <Title>90,86%</Title>
            <Subtitle>das refeições dentro da dieta</Subtitle>
            <ButtonIcon>
                <Icon name="ArrowUpRight" />
            </ButtonIcon>
        </Container>
    );
}