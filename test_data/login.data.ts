export interface USER_DATA {
    username: string,
    password: string
}

export const USERS: {[type: string]: USER_DATA} = {
    "standard_user": {
        username: "standard_user",
        password: "secret_sauce"
    },
    "locked_out_user": {
        username: "locked_out_user",
        password: "secret_sauce"
    },
    "problem_user": {
        username: "problem_user",
        password: "secret_sauce"
    },
    "performance_glitch_user": {
        username: "performance_glitch_user",
        password: "secret_sauce"
    },
    "error_user": {
        username: "error_user",
        password: "secret_sauce"
    },
    "visual_user": {
        username: "visual_user",
        password: "secret_sauce"
    },
    "non-existing__useer": {
        username: "non-existing-username",
        password: "random_pass"
    }
}
