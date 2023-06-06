import { delay } from "@utils/general";
// This service returns a sequence of answers
// to mock the behaviour of a chatGPT API

export const mockAnswers: string[] = [
  "Hi, please describe what your business does",
  "Great, we insure thousands of amazing photographers. Do you run a studio or sell prints and gifts online?",
  "OK, can you try describing your business another way?",
  "I give up",
];

// Generator to return next answer
const mockChatGenerator = function* () {
  for (let answer of mockAnswers) {
    yield answer;
  }
};

export class mockChatAPI {
  private generator = mockChatGenerator();

  public async getAnswer(): Promise<string | void> {
    await delay(200);
    return this.generator.next().value;
  }
}
