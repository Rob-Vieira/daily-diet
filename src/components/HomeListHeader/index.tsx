import { Button } from "@components/Button";
import { Container, TextM } from "./styles";

export function HomeListHeader(){
    return (
        <Container>
            <TextM>
                Refeições
            </TextM>
    
            <Button 
                title="Nova refeição"
                iconName="Plus"
                showIcon
            />  
        </Container>
    );
}