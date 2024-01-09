import { BackButton, BackIcon, Container, Subtitle, Title } from "./styles";

export function PercentFullscreen() {
    return (
        <Container>
            <BackButton>
                <BackIcon name="ArrowLeft" />
            </BackButton>
            <Title>
                90,86%
            </Title>
            <Subtitle>
                das refeições dentro da dieta
            </Subtitle>
        </Container>
    );
}