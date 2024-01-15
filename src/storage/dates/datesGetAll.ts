import AsyncStorage from "@react-native-async-storage/async-storage";
import { DATES_COLLECTION } from "@storage/config";

export async function datesGetAll() {
    try {
        const storedItems = await AsyncStorage.getItem(DATES_COLLECTION);

        const items: string[] = storedItems ? JSON.parse(storedItems) : []

        return items;
    } catch (error) {
        throw error;
    }
}