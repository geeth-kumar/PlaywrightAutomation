
export const loginData = [
    {
        username: 'geeth',
        password: 'QA12345',
        expectedMessage: 'Login successful',
        scenario: 'Valid credentials'
    },
    {
        username: 'wronguser',
        password: 'wrongpass',
        expectedMessage: 'Invalid username or password',
        scenario: 'Invalid credentials'
    },
    {
        username: '',
        password: '',
        expectedMessage: '',
        scenario: 'Empty credentials'
    }
];
