import { Button } from "@components/Button";
import { Container, Header, Highlight, Ilustration, Subtitle, Title } from "./styles";

import imgSuccess from '@assets/feedback_success.png'
import imgFail from '@assets/feedback_fail.png'
import { useNavigation, useRoute } from "@react-navigation/native";

type RoutesParams = {
    inDiet: string;
}

export function Feedback(){
    const navigation = useNavigation()
    const { params } = useRoute()

    const { inDiet } = params as RoutesParams;

    function handleGoHome(){
        navigation.navigate('home');
    }

    return (
        <Container>
            {
                inDiet 
                ? (
                    <>
                        <Header>
                            <Title inDiet>
                                Continue assim!
                            </Title>
                            <Subtitle>
                                Você continua <Highlight>dentro da dieta</Highlight>. Muito bem!
                            </Subtitle>
                        </Header>
                        <Ilustration source={imgSuccess}/>
                    </>
                ) 
                : (
                    <>
                        <Header>
                            <Title inDiet={false}>
                                Que pena!
                            </Title>
                            <Subtitle>
                                Você <Highlight>saiu da dieta</Highlight> dessa vez, mas continue se esforçando e não desista!
                            </Subtitle>
                        </Header>
                        <Ilustration source={imgFail}/>
                    </>
                )
            }
            <Button 
                title="Ir para a página inicial"
                onPress={handleGoHome}
            />
        </Container>
    );
}