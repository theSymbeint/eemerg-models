import {ServiceProvider} from "../src/index"


test('ServiceProvider', () => {
    let sp = new ServiceProvider()

    expect(sp).toBeInstanceOf(ServiceProvider)
})