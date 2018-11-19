import {ServiceProvider} from "../src/index"


test('ServiceProvider', () => {
    let sp = new ServiceProvider()

    expect(sp).toBeInstanceOf(ServiceProvider)
    expect(sp.serviceRating()).toEqual(0)
    expect(sp.serviceRatingCount).toEqual(0)
    expect(sp.serviceRatingPoints).toEqual(0)
})

test('ServiceProvider defaults', () => {
    let sp = new ServiceProvider()

    expect(sp.serviceRating()).toEqual(0)
    expect(sp.serviceRatingCount).toEqual(0)
    expect(sp.serviceRatingPoints).toEqual(0)
    expect(sp.active).toEqual(false);
})