import { mockAnswers, mockChatAPI } from "./mockChatAPI";

describe("Mock Chat API", () => {
  it("returns answers in sequence", async () => {
    const api = new mockChatAPI();
    const SECOND = 1;
    const THIRD = 2;
    const FOURTH = 3;

    expect(await api.getAnswer()).toEqual(mockAnswers[0]);
    expect(await api.getAnswer()).toEqual(mockAnswers[SECOND]);
    expect(await api.getAnswer()).toEqual(mockAnswers[THIRD]);
    expect(await api.getAnswer()).toEqual(mockAnswers[FOURTH]);
  });

  it("returns undefined if there are no more answers", async () => {
    const api = new mockChatAPI();

    await api.getAnswer();
    await api.getAnswer();
    await api.getAnswer();
    await api.getAnswer();

    expect(await api.getAnswer()).toEqual(undefined);
    expect(await api.getAnswer()).toEqual(undefined);
  });
});
