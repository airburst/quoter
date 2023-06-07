import { mockAnswers, mockChatAPI } from "./mockChatAPI";

describe("Mock Chat API", () => {
  it("returns answers in sequence", async () => {
    const api = new mockChatAPI();

    expect(await api.getAnswer()).toEqual(mockAnswers[0]);
    expect(await api.getAnswer()).toEqual(mockAnswers[1]);
    expect(await api.getAnswer()).toEqual(mockAnswers[2]);
    expect(await api.getAnswer()).toEqual(mockAnswers[3]);
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
