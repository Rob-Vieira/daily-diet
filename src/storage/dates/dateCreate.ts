import { stringsToDates } from "@utils/stringsToDates";
import { datesGetAll } from "./datesGetAll";

export async function dateCreate(newDate: Date){
    try {
        const storedItems = await datesGetAll();

        const newStorage = stringsToDates(storedItems);

        
    } catch (error) {
        throw error;
    }
}

function orderDatesByDate(dates: Date[]){
    const organizedDates = dates.sort((a, b) => b.getTime() - a.getTime());

    
    
}