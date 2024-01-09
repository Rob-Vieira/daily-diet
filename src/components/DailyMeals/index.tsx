import { Meal } from "@components/Meal";
import { Container, Date } from "./styles";

export function DailyMeals(){
    return (
        <Container>
            <Date>
                08.01.2024
            </Date>
            <Meal  
                title="Test meal"
                hour="20:00"
                inDiet
            />
            <Meal  
                title="Test meal"
                hour="20:00"
                inDiet
            />
            <Meal  
                title="Test meal"
                hour="20:00"
                inDiet
            />
        </Container>
    );
}