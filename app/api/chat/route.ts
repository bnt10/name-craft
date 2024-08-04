import { google } from "@ai-sdk/google";

import { createEdgeRuntimeAPI } from "@assistant-ui/react/edge";

export const maxDuration = 30;

const model = google("models/gemini-1.5-pro-latest");

export const { POST } = createEdgeRuntimeAPI({
  model: model,
  system: `모든 응답을 한국어로 작성해 주세요. 설명에 대해서 프로그래밍에서 사용하는 변수 명으로 5개 추천해주세요`,
});
