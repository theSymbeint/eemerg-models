class User {
    constructor(user) {
        const {
            id,
            email,
            phone,
            firstName,
            lastName,
            emailVerified,
            phoneVerified,
            createdAt,
            updatedAt,
        } = user || {}

        this.id = id || undefined
        this.email = email || undefined
        this.phone = phone || undefined
        this.firstName = firstName || undefined
        this.lastName = lastName || undefined
        this.emailVerified = emailVerified || undefined
        this.phoneVerified = phoneVerified || undefined
        this.createdAt = createdAt || undefined
        this.updatedAt = updatedAt || undefined
    }
}

export default User
