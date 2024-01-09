import { Container, Description } from "./styles";

type Props = {
    description: string;
}

export function EmptyList({ description }: Props){
    return (
        <Container>
            <Description>
                {description}
            </Description>
        </Container>
    );
}