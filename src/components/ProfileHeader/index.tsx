import { Container, Logo, ProfileImage } from "./styles";

import logoImage from '@assets/logo.png';
import profileImage from '@assets/profile.png';

export function ProfileHeader(){
    return (
        <Container>
            <Logo source={logoImage} />
            <ProfileImage source={profileImage} />
        </Container>
    );
}