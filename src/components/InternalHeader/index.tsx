import { Container, GoBack, Title } from "./styles";

type Props = {
    title: string;
    onGoBack: () => void;
}

export function InternalHeader({ title, onGoBack }: Props){
    return (
        <Container>
            <GoBack onPress={onGoBack} name="ArrowLeft" />
            <Title>
                { title }
            </Title>
        </Container>
    );
}