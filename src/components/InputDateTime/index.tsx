import { Label } from "@components/Label";
import { Container, Value } from "./styles";
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useState } from "react";
import { Platform} from "react-native";

type DataPickerMode = "time" | 'date' | 'countdown' | 'datetime';

type Props = {
    title: string;
    mode: DataPickerMode;
    value: Date;
    onChange?: (event: DateTimePickerEvent, date: Date) => void
}

export function InputDateTime({ title, value, mode, onChange }: Props){
    const [showPicker, setShowPicker] = useState(false);

    function handleChange(event: DateTimePickerEvent, date?: Date){
        setShowPicker(false);
        onChange && onChange(event, date ?? value);
    }

    function showDatepicker(){
        setShowPicker(true);
    };

    function getResult(){
        switch(mode){
            case 'date':
                return value 
                        ? value.toLocaleDateString('pt-BR', {
                            day: "2-digit", 
                            month: "2-digit",
                            year: "numeric"
                        }) 
                        : new Date().toLocaleDateString('pt-BR', {
                            day: "2-digit", 
                            month: "2-digit",
                            year: "numeric"
                        });
            case 'time':
                return value 
                        ? value.toLocaleTimeString('pt-BR', {
                            hour: '2-digit', 
                            minute: '2-digit'
                        }) 
                        : new Date().toLocaleTimeString('pt-BR', {
                            hour: '2-digit', 
                            minute: '2-digit'
                        });
            default:
                return value?.toLocaleString('pt-BR')
        }
    }

    return (
        <Container onPress={showDatepicker}>
            <>
                <Label 
                    title={title}
                />
                <Value>
                    {getResult()}
                </Value>
                
                {
                    showPicker && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={value}
                            mode={mode}
                            display="spinner"
                            onChange={handleChange}
                        />
                    )
                }
            </>
        </Container>
    );
}