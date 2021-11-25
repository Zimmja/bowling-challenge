const Scorecard = require("./scorecard");

const frame0 = { score: () => 0 };
const frame1 = { score: () => 1 };
const frame5 = { score: () => 5 };
const frame9 = { score: () => 9 };
const frame11 = { score: () => 11 };
const frame15 = { score: () => 15 };
const frame16 = { score: () => 16 };
const frame20 = { score: () => 20 };
const frame30 = { score: () => 30 };
const game = new Scorecard();

describe(".score", () => {
  it("returns the score value for a normal game", () => {
    expect(
      game.score([
        frame5,
        frame9,
        frame15,
        frame20,
        frame11,
        frame1,
        frame16,
        frame20,
        frame20,
        frame16,
      ])
    ).toEqual(133);
  });

  it("returns the score value for a gutter game", () => {
    expect(game.score(Array(20).fill(frame0))).toEqual(0);
  });

  it("returns the score value for a perfect game", () => {
    expect(game.score(Array(10).fill(frame30))).toEqual(300);
  });

  it("returns the score value for an unfinished game", () => {
    expect(game.score([frame9, frame1, frame15, frame5])).toEqual(30);
  });
});

// describe(".board", () => {
//   it("returns an array counting up to the score with each frame", () => {
//     expect(gameNormal.board()).toEqual([
//       5, 14, 29, 49, 60, 61, 77, 97, 117, 133,
//     ]);
//   });
// });

// const gameNormal = new Scorecard([
//   1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6,
// ]);
// const gameGutter = new Scorecard([
//   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
// ]);
// const gamePerfect = new Scorecard([
//   10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
// ]);
// const gameUnfinished = new Scorecard([3, 4, 5, 2, 10, 1, 2]);
