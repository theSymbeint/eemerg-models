import  User  from '../src/user';

test('User', () => {
    const us = new User()
    expect(us).toBeInstanceOf(User)
})