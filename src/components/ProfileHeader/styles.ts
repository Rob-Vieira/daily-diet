import { Image } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 32px;
`;

const Logo = styled(Image)`
    width: 82px;
    height: 37px;
`;

const ProfileImage = styled(Image)`
    width: 40px;
    height: 40px;
    border-width: 2px;
    border-color:  ${({ theme }) => theme.colors.gray_2};
    border-radius: 100px;
`;

export {
    Container,
    Logo,
    ProfileImage
}