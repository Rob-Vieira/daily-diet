import { PercentFullscreen } from "@components/PercentFullscreen";
import { Container, Content, DoubleData, Title } from "./styles";
import { StatisticalData } from "@components/StatisticalData";

export function Statistics(){
    return (
        <Container isInDiet={false}>
            <PercentFullscreen
                percentage={50.00}
                subtitle="das refeições dentro da dieta"
            />

            <Content>
                <Title>
                    Estatísticas gerais
                </Title>

                <StatisticalData />
                <StatisticalData />

                <DoubleData>
                    <StatisticalData toGrow type="Success" />
                    <StatisticalData toGrow type="Danger" />
                </DoubleData>
            </Content>
        </Container>
    );
}