export declare namespace Session {
    export interface User {
        firstName: string,
        lastName: string,
        acceptedTerms: boolean,
        email: string | null,
        phoneNumber: string | null,
        profilePicture: any | null,
    }
    export interface Root {
        accessToken: string,
        user: User;
    }
}