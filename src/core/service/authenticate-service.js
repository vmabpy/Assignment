export const login = (username, password) => {
    if (username.toLowerCase() === "admin") {
        if (password === "123456") {
            return { status: 200, user: { username, token: 'abc', fullName: 'Administration' } }
        } else {
            return { status: 404, errorString: 'Username & password are not match' }
        }
    }
    return { status: 404, errorString: 'User is not existed!' }
}