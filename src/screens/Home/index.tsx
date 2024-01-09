import { ProfileHeader } from "@components/ProfileHeader";
import { Container } from "./styles";
import { Percent } from "@components/Percent";
import { HomeListHeader } from "@components/HomeListHeader";
import { DailyMeals } from "@components/DailyMeals";
import { FlatList } from "react-native";
import { EmptyList } from "@components/EmptyList";

export function Home(){
    return (
        <Container>
            <ProfileHeader />
            
            <Percent />

            <FlatList 
                data={[]}
                keyExtractor={(_item, index) => 'meal_' + index}
                renderItem={({ item }) => <DailyMeals />}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => <HomeListHeader />}
                ListEmptyComponent={
                    () => (
                        <EmptyList 
                            description="Você ainda não possuí nenhuma refeição cadastrada!"
                        />
                    )
                }
            />
        </Container>
    );
}