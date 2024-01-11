import { IconTypeProps } from "@components/Icon"
import { Container, Title, Icon, ButtonStyleProps } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    title: string;
    showIcon?: boolean;
    iconName?: IconTypeProps;
    type?: ButtonStyleProps;
}

export function Button({ title, showIcon = false, iconName = 'ArrowLeft', type = 'SOLID', ...rest }: Props){
    return (
        <Container type={type} { ...rest }>
            {
                showIcon && <Icon type={type} name={iconName} />
            }
            <Title type={type}>
                {title}
            </Title>
        </Container>
    );
}