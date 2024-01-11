import { ProfileHeader } from "@components/ProfileHeader";
import { Container } from "./styles";
import { Percent } from "@components/Percent";
import { HomeListHeader } from "@components/HomeListHeader";
import { DailyMeals } from "@components/DailyMeals";
import { FlatList } from "react-native";
import { EmptyList } from "@components/EmptyList";
import { MealProps } from "@components/Meal";
import { useNavigation } from "@react-navigation/native";

export function Home(){
    const navigation = useNavigation();

    const dailyMeals = [
        {
            date: '05.01.2024',
            meals: [
                {
                    title: 'Lasanha de queijo',
                    hour: '20:00',
                    inDiet: false
                },
                {
                    title: 'Barra de proteína',
                    hour: '16:00',
                    inDiet: true
                },
                {
                    title: 'Salada de Tomate',
                    hour: '12:30',
                    inDiet: true
                },
                {
                    title: 'Salgado de presuto e queijo',
                    hour: '9:35',
                    inDiet: false
                },
            ]
        },
        {
            date: '08.01.2024',
            meals: [
                {
                    title: 'Lasanha de queijo',
                    hour: '20:00',
                    inDiet: false
                },
                {
                    title: 'Barra de proteína',
                    hour: '16:00',
                    inDiet: true
                },
                {
                    title: 'Salada de Tomate',
                    hour: '12:30',
                    inDiet: true
                },
                {
                    title: 'Salgado de presuto e queijo',
                    hour: '9:35',
                    inDiet: false
                },
            ]
        },
        {
            date: '06.01.2024',
            meals: [
                {
                    title: 'Lasanha de queijo',
                    hour: '20:00',
                    inDiet: false
                },
                {
                    title: 'Barra de proteína',
                    hour: '16:00',
                    inDiet: true
                },
                {
                    title: 'Salada de Tomate',
                    hour: '12:30',
                    inDiet: true
                },
                {
                    title: 'Salgado de presuto e queijo',
                    hour: '9:35',
                    inDiet: false
                },
            ]
        },
    ]

    function getAllMeals(): MealProps[]{
        let allMeals: MealProps[] = [];

        dailyMeals.forEach(dailyMeal => allMeals.push(...dailyMeal.meals));

        return allMeals;
    }

    function getPercentageMealsInDiet(): number{
        let allMeals = getAllMeals();
        let mealsInDiet = allMeals.filter(meal => meal.inDiet);

        return (mealsInDiet.length / allMeals.length) * 100;
    }

    function stringToDate(stringDate: string): Date{
        let date = stringDate.split('.');
        
        return new Date(parseInt(date[2]), parseInt(date[1]) - 1, parseInt(date[0]));
    }

    function orderDailyMealsByDate(){
        return dailyMeals.sort((a, b) => {
            let dateA = stringToDate(a.date).getTime();
            let dateB = stringToDate(b.date).getTime();

            return dateB - dateA;
        })
    }

    function handleGoNewMeal(){
        navigation.navigate('newMeal');
    }

    return (
        <Container>
            <ProfileHeader />

            <Percent 
                percentage={getPercentageMealsInDiet()}
                subtitle="das refeições dentro da dieta"
            />

            <FlatList 
                data={orderDailyMealsByDate()}
                keyExtractor={(_item, index) => 'meal_' + index}
                renderItem={({ item }) => <DailyMeals {...item} />}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    () => (
                        <HomeListHeader 
                            onNewMeal={ handleGoNewMeal }
                        />
                    )
                }
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