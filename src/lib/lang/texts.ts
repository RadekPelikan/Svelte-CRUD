type LanguageTexts = {
    nav: {
        home: string,
        cars: string,
        phones: string,
        laptops: string,
        watches: string,
    },
    model: {
        cars: {
            id: string,
            name: string,
            brand: string,
            power: string
        },
        phones: {
            id: string,
            name: string,
            brand: string,
            power: string
        },
        laptops: {
            id: string,
            name: string,
            brand: string,
            power: string
        },
        watches: {
            id: string,
            name: string,
            brand: string,
            power: string
        },
    },
    form: {
        submitCreate: string,
        submitUpdate: string,
    }
}

type AllLanguageTexts = {
    cs: LanguageTexts
}

export const TEXTS: AllLanguageTexts = {
    cs: {
        nav: {
            home: "Domů",
            cars: "Auto",
            phones: "Telefony",
            laptops: "Notebooky",
            watches: "Hodinky",
        },
        model: {
            cars: {
                id: "Id",
                name: "Auto",
                brand: "Značka",
                power: "Výkon"
            },
            phones: {
                id: "Id",
                name: "",
                brand: "",
                power: ""
            },
            laptops: {
                id: "Id",
                name: "",
                brand: "",
                power: ""
            },
            watches: {
                id: "Id",
                name: "",
                brand: "",
                power: ""
            }
        },

        form: {
            submitCreate: "Vytvořit",
            submitUpdate: "Poslat",
        }
    }
}

export const DEFAULT_LANG = "cs"