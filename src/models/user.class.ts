export class User {
    firstName: string;
    lastName: string;
    birthDate: number; // timestam reinkopieren. Komplexe Datentypen wir ein Date Objekt können wir nicht speichern.
    street: string;
    zipCode: number;
    city: string;

    /**
     * Fragezeichen: Objekt optional eingeben. Nutzer anlegen auch ohne Objekt möglich.
     */
    constructor(obj?: any) {
        // if(obj) {
        // this.firstName = obj.firstName;
        // } else {
        //     this.firstName = '';
        // }

        // Möglichkeit zur If-Else-Abfrage, nur kürzer und schneller:
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
    }
}