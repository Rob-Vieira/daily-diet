import { IconProps } from "@components/Icon"
import { Container, Title, Icon, ButtonStyleProps } from "./styles";

type Props = {
    title: string;
    showIcon?: boolean;
    iconName?: IconProps;
    type?: ButtonStyleProps;
}

export function Button({ title, showIcon = false, iconName = 'ArrowLeft', type = 'SOLID' }: Props){
    return (
        <Container type={type}>
            {
                showIcon && <Icon type={type} name={iconName} />
            }
            <Title type={type}>
                {title}
            </Title>
        </Container>
    );
}