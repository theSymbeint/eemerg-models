import {Bid}from "../src/index"



test('Bid', () => {
    let bid = new Bid()
    expect(bid).toBeInstanceOf(Bid);
})