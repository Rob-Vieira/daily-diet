import { Text } from "react-native";
import { Container, LoadingIndicator, Logo } from "./styles";

import logoImg from '@assets/logo.png';

type Props = {
    showLogo?: boolean
}

export function Loading({ showLogo = false }: Props){
    return (
        <Container>
            {
                showLogo && <Logo source={logoImg} />
            }
            <LoadingIndicator />
        </Container>
    );
}