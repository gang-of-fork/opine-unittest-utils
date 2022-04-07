import { OpineRequest, OpineResponse } from "../deps.ts";
import { assertSpyCall, Spy } from "../deps.ts";
import { mockRequest, mockResponse } from "../mod.ts";

function opineRequestHandler(req: OpineRequest, res: OpineResponse) {
    res.setStatus(401).send("Not allowed")
}

Deno.test("Simple test with headers", () => {
    

  const request = mockRequest({
      headers: new Headers({
          'apiKey': 'myKey'
      }),
  });

  //need to create a second mock to allow chaining
  const sendMock = mockResponse();

  const response = mockResponse({
      setStatus: () => sendMock 
  });

  opineRequestHandler(request, response);

  assertSpyCall(response.setStatus as Spy<any>, 0, { args: [401] });
  assertSpyCall(sendMock.send as Spy<any>, 0, { args: ["Not allowed"] });
});
