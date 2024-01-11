import { Button } from "@components/Button";
import { Container, Content, Form } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { InternalHeader } from "@components/InternalHeader";
import { Input } from "@components/Input";
import { InputDateTime } from "@components/InputDateTime";

export function NewMeal(){
    const navigation = useNavigation();
    
    function handleGoBack(){
        navigation.navigate("home");
    }

    return (
        <Container>
            <InternalHeader 
                onGoBack={handleGoBack}
                title="Nova refeição"
            />

            <Content>
                <Form>
                    <Input  
                        title="Nome"
                    />

                    <Input 
                        title="Descrição"
                        multiline
                        textAlignVertical="top"
                        autoCorrect={false}
                        numberOfLines={5}
                    />

                    <InputDateTime/>
                </Form>

                <Button 
                    title="Cadastrar refeição" 
                />
            </Content>
        </Container>
    );
}