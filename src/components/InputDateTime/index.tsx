import { Container, Value } from "./styles";
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useState } from "react";
import { Platform} from "react-native";

export function InputDateTime(){
    const [date, setDate] = useState(new Date);
    const [showPicker, setShowPicker] = useState(false);


    const onChange = (event: DateTimePickerEvent, selectedDate?: Date | undefined) => {
        const currentDate = selectedDate || date;
        setShowPicker(Platform.OS === 'ios');
        setDate(currentDate);
      };
    
      const showDatepicker = () => {
        setShowPicker(true);
      };

    return (
        <Container onPress={showDatepicker}>
            <>
                <Value>
                    {date.toLocaleDateString('pt-BR')}
                </Value>
                
                {
                    showPicker && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode="date"
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )
                }
            </>
        </Container>
    );
}