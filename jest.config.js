module.exports = {
  verbose: true,
  roots: ["./tests"],
  testMatch: ["**/?(*.)test.+(ts|tsx)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  setupFilesAfterEnv: ["jest-extended"],
  preset: "ts-jest",
  moduleDirectories: ["node_modules", "src"],
};
