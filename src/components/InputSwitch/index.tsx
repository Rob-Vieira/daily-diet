import { Label } from "@components/Label";
import { ButtonDanger, ButtonSuccess, ButtonTitle, Container, Icon, Row } from "./styles";
import { useState } from "react";

export type InputSwitchReturnType = 'yes' | 'no' | 'unset';

type Props = {
    title: string;
    value: InputSwitchReturnType;
    onChange?: (response: InputSwitchReturnType) => void;
}

export function InputSwitch({ title, value, onChange }: Props){
    const [successBtnActive, setSuccessBtnActive] = useState(false);
    const [dangerBtnActive, setDangerBtnActive] = useState(false);
    
    function toggleBtnsActive(){

    }

    function handleToggle(newValue: InputSwitchReturnType){
        switch(newValue){
            case "yes":
                setSuccessBtnActive(true);
                setDangerBtnActive(false);
                onChange && onChange('yes');

                break;
            case "no":
                setSuccessBtnActive(false);
                setDangerBtnActive(true);
                onChange && onChange('no');

                break;
            case "unset":
                setSuccessBtnActive(false);
                setDangerBtnActive(false);
                onChange && onChange('unset');

                break;
        }
    }

    return (
        <Container>
            <Label 
                title='Está dentro da dieta?'
            />
            <Row>
                <ButtonSuccess
                    onPress={() => handleToggle('yes') } 
                    active={successBtnActive} 
                >
                    <Icon type="SUCCESS" />
                    <ButtonTitle>Sim</ButtonTitle>
                </ButtonSuccess>
                
                <ButtonDanger
                    onPress={() => handleToggle('no') } 
                    active={dangerBtnActive} 
                >
                    <Icon type="DANGER" />
                    <ButtonTitle>Não</ButtonTitle>
                </ButtonDanger>
            </Row>
        </Container>
    );
}