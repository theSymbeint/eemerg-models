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

        this._user_data = [
            "id",
            "email",
            "phone",
            "firstName",
            "lastName",
            "emailVerified",
            "phoneVerified",
            "createdAt",
            "updatedAt",
        ]

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

    persist() {
        let _obj = {}
        //persist what is defined
        this._user_data.forEach(o => {
            if (this[o] !== undefined) {
                _obj[o] = this[o]
            }
        })

        return _obj
    }
}

export default User
