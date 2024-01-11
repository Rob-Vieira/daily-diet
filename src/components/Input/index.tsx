import { TextInputProps } from "react-native";
import { Container, InputText } from "./styles";
import { Label } from "@components/Label";

type InputProps = {
    title: string;
    toGrow?: boolean;
}

type Props = TextInputProps & InputProps;

function Input({ title, toGrow = false, ...rest }: Props){
    return (
        <Container toGrow={toGrow}>
            <Label 
                title={title}
            />
            <InputText {...rest} />
        </Container>
    );
}

export {
    Input,
    InputProps
}