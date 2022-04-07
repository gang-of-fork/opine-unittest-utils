import { NextFunction, OpineRequest, OpineResponse } from "../deps.ts";
import { assertSpyCall, Spy } from "../deps.ts";
import { mockRequest, mockResponse, mockNextFunction } from "../mod.ts";

function opineRequestHandler(req: OpineRequest, res: OpineResponse, next: NextFunction) {
  if (req.headers.get("apiKey") == "myKey") {
    next();
  } else {
    res.send("invalid");
  }
}

Deno.test("Simple test with nextfunction", () => {
  const request = mockRequest({
    headers: new Headers({
      "apiKey": "myKey",
    }),
  });
  const response = mockResponse();
  
  const next = mockNextFunction();

  opineRequestHandler(request, response, next);

  assertSpyCall(next as Spy<any>, 0);
});
