import { Container, Diet, Hour, Title } from "./styles";

type Props = {
    title: string;
    hour: string;
    inDiet: boolean;
}

export function Meal({ title, hour, inDiet }: Props){
    return (
        <Container>
            <Hour>{hour}</Hour>
            <Title>{title}</Title>
            <Diet inDiet={inDiet} />
        </Container>
    );
}