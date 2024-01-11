import { Container, Diet, Hour, Title } from "./styles";

export type MealProps = {
    title: string;
    hour: string;
    inDiet: boolean;
}

export function Meal({ title, hour, inDiet }: MealProps){
    return (
        <Container>
            <Hour>{hour}</Hour>
            <Title>{title}</Title>
            <Diet inDiet={inDiet} />
        </Container>
    );
}