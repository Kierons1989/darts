// Shared game state - this will eventually be managed by React state/context
export const gameState = {
  p1: {
    name: "ANDERSON",
    score: 141,
    rounds: [60, 100, 85, 57, 58],
    dartsThrown: 1,
    currentRound: [20],
    average: 72,
    legsWon: 2
  },
  p2: {
    name: "VAN GERWEN",
    score: 218,
    rounds: [45, 60, 81, 55, 42],
    average: 56.6,
    legsWon: 1
  },
  leg: 3,
  set: 1,
  checkout: "T20 • 17 • D22",
  startingScore: 501,
};

// Dartboard constants
export const BOARD_NUMBERS = [20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5];

export const RADII = {
  bullseye: 0.032,
  outerBull: 0.08,
  tripleInner: 0.582,
  tripleOuter: 0.629,
  doubleInner: 0.938,
  doubleOuter: 1.0,
};
