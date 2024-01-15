export function stringsToDates(sDates: string[]){
    return sDates.map(date => {
        const dismemberedDate = date.split('.');
        
        return new Date(
            parseInt(dismemberedDate[2]), 
            parseInt(dismemberedDate[1]) - 1,
            parseInt(dismemberedDate[0]) 
        );
    })
}