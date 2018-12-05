import { Bid, Billable } from "../src/index"

test("Bid", () => {
    let bid = new Bid()
    expect(bid).toBeInstanceOf(Bid)
})

test("Bids Billiables", () => {
    let bid = new Bid({
        billables:
            '[{"item":"EEMERG DEADBAT","cost":15,"qty":1},{"item":"PROVIDER DEADBAT","cost":5,"qty":1},{"item":"JUMPSERVICE","cost":45,"qty":1}]',
    })
    expect(bid.bArry.length).toEqual(3)
    expect(bid.bArry[0]).toBeInstanceOf(Billable)
    expect(bid.total).toEqual(65)
})
