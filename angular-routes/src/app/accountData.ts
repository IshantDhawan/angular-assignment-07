export type accounts  = {
    date : string;
    chequeNo : string;
    valueDate : string;
    withdrawal : number;
    deposit : number;
    closingBalance : number;
}  

export let accountDetails = [
    {
        date : "09-April-2020",
        chequeNo : "A123",
        valueDate : "06-April-2020",
        withdrawal : 10000,
        deposit : 0,
        closingBalance : 150000
    },
    {
        date : "07-April-2020",
        chequeNo : "A123",
        valueDate : "05-April-2020",
        withdrawal : 3000,
        deposit : 10000,
        closingBalance : 160000
    },
    {
        date : "05-April-2020",
        chequeNo : "A123",
        valueDate : "03-April-2020",
        withdrawal : 2000,
        deposit : 0,
        closingBalance : 153000
    },
    {
        date : "03-April-2020",
        chequeNo : "A123",
        valueDate : "01-April-2020",
        withdrawal : 0,
        deposit : 5000,
        closingBalance : 155000
    },
    {
        date : "01-April-2020",
        chequeNo : "A123",
        valueDate : "30-March-2020",
        withdrawal : 10000,
        deposit : 0,
        closingBalance : 150000
    }
]