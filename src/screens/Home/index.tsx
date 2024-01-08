import { ProfileHeader } from "@components/ProfileHeader";
import { Container, TextM } from "./styles";
import { Percent } from "@components/Percent";
import { Icon } from "@components/Icon";
import { Button } from "@components/Button";

export function Home(){
    return (
        <Container>
            <ProfileHeader />
            
            <Percent />

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