import { OpineRequest, OpineResponse } from "../deps.ts";
import { assertSpyCall, Spy } from "../deps.ts";
import { mockRequest, mockResponse } from "../mod.ts";

function opineRequestHandler(req: OpineRequest, res: OpineResponse) {
  res.send(req.body.someArg);
}

Deno.test("Simple test with body", () => {
  const request = mockRequest({
      body: {
          someArg: "SomeValue"
      } 
  });
  const response = mockResponse();

  opineRequestHandler(request, response);

  assertSpyCall(response.send as Spy<any>, 0, { args: ["SomeValue"] });
});
