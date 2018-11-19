import  User  from '../src/user';

test('User', () => {
    const us = new User()
    expect(us).toBeInstanceOf(User)
    
})


test('User persist func', () => {
    let _obj = {id:34}
    const us = new User()
    const us1 = new User(_obj)

    expect(us.persist()).toEqual({})
    expect(us1.persist()).toEqual(_obj)
})