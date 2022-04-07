import { OpineRequest, OpineResponse } from "../deps.ts";
import { assertSpyCall, Spy } from "../deps.ts";
import { mockRequest, mockResponse } from "../mod.ts";

function opineRequestHandler(req: OpineRequest, res: OpineResponse) {
  res.send("message");
}

Deno.test("Simple test with opine-unittest-utils", () => {
  const request = mockRequest();
  const response = mockResponse();

  opineRequestHandler(request, response);

  assertSpyCall(response.send as Spy<any>, 0, { args: ["message"] });
});
