import { getMessage } from "@components/Chat/getMessage";
import { Message } from "@components/Chat/types";
import { delay } from "@utils/general";
// This service returns a sequence of answers
// to mock the behaviour of a chatGPT API

export const mockAnswers: Message[] = [
  {
    message:
      "Great, we insure thousands of amazing photographers. Do you run a studio or sell prints and gifts online?",
  },
  {
    message:
      "Thanks, based on what you have told us our insurers would define what you do as",
    suggestion: {
      title: "Photographer",
      description:
        "We define photography as the art or practice of taking, editing, and processing photographs.",
      message: "Are you happy to get insurance quotes with this match?",
    },
  },
  {
    message: "Let's try again. Please describe what your business does.",
  },
].map(message => getMessage({ ...message }, "server"));

// Generator to return next answer
const mockChatGenerator = function* () {
  for (const answer of mockAnswers) {
    yield answer;
  }
};

const MOCK_API_DELAY_IN_MS = 200;

export class mockChatAPI {
  private generator = mockChatGenerator();

  public async getAnswer(): Promise<Message | void> {
    await delay(MOCK_API_DELAY_IN_MS);

    return this.generator.next().value;
  }
}
