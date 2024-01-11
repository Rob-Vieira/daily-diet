import { useNavigation } from "@react-navigation/native";
import { BackButton, BackIcon, Container, Subtitle, Title } from "./styles";
import { PercentProps } from "@components/Percent";

export function PercentFullscreen({ percentage, subtitle }: PercentProps) {
    const navigation = useNavigation();

    function handleBack(){
        navigation.navigate('home');
    }

    const isInDiet = percentage > 60;

    return (
        <Container>
            <BackButton onPress={handleBack} >
                <BackIcon isInDiet={isInDiet} name="ArrowLeft" />
            </BackButton>
            <Title>
                { `${percentage.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}%` }
            </Title>
            <Subtitle>
                { subtitle }
            </Subtitle>
        </Container>
    );
}