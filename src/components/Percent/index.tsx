import { useNavigation } from "@react-navigation/native";
import {  Container, Subtitle, Title, ButtonIcon, Icon } from "./styles";


export type PercentProps = {
    percentage: number;
    subtitle: string;
}

export function Percent({ percentage, subtitle }: PercentProps){
    const navigation = useNavigation();

    function handleOpenStatistics(){
        navigation.navigate('statistics')
    }

    const isInDiet = percentage > 60;

    return (
        <Container isInDiet={ isInDiet } >
            <Title>
                { `${percentage.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}%` }
            </Title>
            <Subtitle>{ subtitle }</Subtitle>
            <ButtonIcon onPress={ handleOpenStatistics }>
                <Icon isInDiet={ isInDiet } name="ArrowUpRight" />
            </ButtonIcon>
        </Container>
    );
}