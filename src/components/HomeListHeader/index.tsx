import { Button } from "@components/Button";
import { Container, TextM } from "./styles";

type Props = {
    onNewMeal: () => void
}

export function HomeListHeader({ onNewMeal }: Props){
    return (
        <Container>
            <TextM>
                Refeições
            </TextM>
    
            <Button 
                onPress={ onNewMeal }
                title="Nova refeição"
                iconName="Plus"
                showIcon
            />  
        </Container>
    );
}