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
    english: [
        {
            1: "Current Task",
            2: "Add New Tasks",
            3: "Finish Session",
            4: "Continue to Break",
            5: "End Break",
            6: "On Break",
            7: "Break Over"
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