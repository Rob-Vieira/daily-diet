import { Button } from "@components/Button";
import { Container, Content, DateTime, Form, TwoInLine } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { InternalHeader } from "@components/InternalHeader";
import { Input } from "@components/Input";
import { InputDateTime } from "@components/InputDateTime";
import { useEffect, useState } from "react";
import { InputSwitch, InputSwitchReturnType } from "@components/InputSwitch";

export function NewMeal(){
    const [date, setDate] = useState<Date>(new Date);
    const [inDiet, setInDiet] = useState<InputSwitchReturnType>('unset');

    const navigation = useNavigation();
    
    function handleGoBack(){
        navigation.navigate("home");
    }

    function handleNewMeal(){
        navigation.navigate("feedback", { inDiet: false });
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

                    <TwoInLine>
                        <DateTime
                            mode="date"
                            title="Data"
                            value={date}
                            onChange={(_event, date)=>{ setDate(date) }}
                        />
                        <DateTime
                            mode="time"
                            title="Hora"
                            value={date}
                            onChange={(_event, date)=>{ setDate(date) }}
                        />
                    </TwoInLine>

                    <InputSwitch 
                        value={inDiet}
                        title="Está dentro da dieta?"
                        onChange={setInDiet}
                    />

                </Form>

                <Button 
                    title="Cadastrar refeição"
                    onPress={handleNewMeal}
                />
            </Content>
        </Container>
    );
}