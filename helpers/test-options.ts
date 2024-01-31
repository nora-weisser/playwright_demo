import { test as base } from '@playwright/test'
import { USER_DATA } from '../test_data/login.data'
import { USERS } from '../test_data/login.data'

export interface TestOptions {
    targetUser: USER_DATA
}

export const test = base.extend<TestOptions>({
    targetUser: [USERS['standard_user'], { option: true }],
})
