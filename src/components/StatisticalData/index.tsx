import { Container, StatisticalDataStylesProps, Subtitle, Title } from "./styles";

type Props = {
    toGrow?: boolean;
    type?: StatisticalDataStylesProps;
}

export function StatisticalData({ toGrow = false, type = 'Default' }: Props){
    return (
        <Container toGrow={toGrow} type={type} >
            <Title>
                55
            </Title>
            <Subtitle>
                Lorem ipsum dolor sit amet.
            </Subtitle>
        </Container>
    );
}