export const globalStats = {
    //Dynamic profile stats that should be be updated based on user actions
    name : "", // user name
    duckNumber: 0, // the number of study cycles the user goes through in a session.
    duckType: "", // duck types is relative based on the quiz, may change after learning how to make the quizzes 
}

export const currentTasks = {
    //empty array, pushes imported tasks to array
    tasks: []
}

export const recommendedTasks = {
    //For the chips filter
    //Use the same process for the bookstore in the assessment
    //Not sure how to make it apply to the physical list though
    subjects: [
        {
            subject: "Finish Math",
            category: "Homework"
        },
        {
            subject: "Finish Science",
            category: "Homework"
        },
        {
            subject: "Finish English",
            category: "Homework"
        },
        {
            subject: "Finish Art",
            category: "Homework"
        },
        {
            subject: "Finish Cleaning",
            category: "Simple"
        },
        {
            subject: "Finish Reading",
            category: "Simple"
        },
        {
            subject: "Gaming for 20 Minutes",
            category: "Activities"
        },
    ]
} 

export const appText = {
    //All text in the app stored here. Call it here so we can make it switch between Eng and Fr.
    English: [
        {
            0: "Filter",
            1: "All",
            2: "Simple Tasks",
            3: "Activities",
            4: "Homework",
            5: "Add a Premade Task",
            6: "Task Added!",
            7: "Write A New Task",
            8: "Completed Cycles",
            9: "Quick Add Tasks +",
            10: "Current Tasks:"
        }
    ],
    French: [
        {
            0: "Filtre",
            1: "Tout",
            2: "Tâches simples",
            3: "Activités",
            4: "Devoirs",
            5: "Ajouter une tâche prédéfinie",
            6: "Tâche ajoutée!",
            7: "Écrire une nouvelle tâche",
            8: "Cycles complétés",
            9: "Ajouter rapidement+",
            10: "Tâches actuelles :"
        }
    ]
}


export const introDialogue = {
    //  English and french keys should match up to be the same phrase. 
    //  1 = Hello in both french & and english. There should be no disprepancies
    english: [
        {
            1: "Welcome!"
        }
    ],
    french: [
        {
            1: "Bienvenue!"
        }
    ]
}

export const summaryPage = {
    //This is where the quiz text should go
}

export const duckType = {
    //Could be changed
    ducks: [
        {
            duckType: "Mallard",
            description: ""
        },
        {
            duckType: "Domestic Duck",
            description: ""
        },
        {
            duckType: "Marbled Duck",
            description: ""
        },
    ]
}

export const settingTextInv = {
    English: [
        {
            1: "Language",
            2: "Theme",
            3: "Confirm Changes",
            4: "Go To Quiz",
            5: "Main Menu",
            6: "Settings",
            7: "Music"
        }
    ],
    French: [
        {
            1: "Langue",
            2: "Thème",
            3: "Confirmer Les Modifications",
            4: "Aller au quiz",
            5: "Menu principal",
            6: "Paramètres",
            7: "Musique"
        }
    ]
}