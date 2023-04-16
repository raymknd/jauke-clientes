import { Session } from "../redux/reducers/session/session.types";

export default class ApiService {
    baseUrl: string;
    constructor() {
        this.baseUrl = "https//api.jauke.cl";
    }

    async rootFetch(path: string, options?: RequestInit) {
        const root = await fetch(`${this.baseUrl}${path}`, {
            headers: {
                "Content-Type": "application/json",
            },
            ...options,
        })
        const body = await root.json();
        return { root, body };
    }
    
    login(username: string, password: string): Promise<Session.Root> {
        return new Promise((res) => {
            setTimeout(() => {
                res({
                    accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
                    user: {
                        firstName: "Raimundo",
                        lastName: "Navarrete",
                        acceptedTerms: false,
                        email: "hola@raymknd.cyou",
                        phoneNumber: null,
                        profilePicture: null,
                    }
                })
            }, 2000);
        })
    }
    async myProjects() {
        return {};
    }
}