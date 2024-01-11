import { Meal, MealProps } from "@components/Meal";
import { Container, Date } from "./styles";

type Props = {
    date: string;
    meals: MealProps[]
}

export function DailyMeals({ date, meals }: Props){
    return (
        <Container>
            <Date>
                { date }
            </Date>
            
            {
                meals && (
                    meals.map((meal, index) => <Meal key={`${date}-${index}`} {...meal} />)
                )
            }

        </Container>
    );
}