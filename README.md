# 🦕 opine-unittest-utils

[Deno](https://deno.land) module provides simple mock objects for requests and responses to facilitate unit testing for [Opine](https://deno.land/x/opine).

Compared to the Deno module [SuperDeno](https://deno.land/x/superdeno), here the handler can be tested independently from the Opine App instance by calling them directly with mocked request and response objects.

## Getting Started 

```ts
import { OpineRequest, OpineResponse } from "https://deno.land/x/opine@2.1.2/mod.ts";
import { spy, assertSpyCall} from "https://deno.land/x/mock@0.13.0/mod.ts";
import { mockRequest, mockResponse } from "https://deno.land/x/opine_unittest_utils";

function opineRequestHandler(req: OpineRequest, res: OpineResponse) {
  res.send("message");
}

Deno.test("Simple test with opine-unittest-utils", () => {
  const request = mockRequest();
  const response = mockResponse();

  opineRequestHandler(request, response);

  assertSpyCall(response.send as Spy<any>, 0, { args: ["message"] });
});
```
Further Examples in `examples`

## Installation

This is a [Deno](https://deno.land) module available to import direct from this repo and via the [Deno Registry](https://deno.land/x).

Before importing, [download and install Deno](https://deno.land/#installation).

You can then import `opine-unittest-utils` straight into your project:

```ts
import { opine-unittest-utils } from "https://deno.land/x/opine_unittest_utils/mod.ts";
```

## Changelog

### v0.2

### v0.1

## Reference

This Deno module is similar to the [sinon-express-mock]https://www.npmjs.com/package/sinon-express-mock module for express.
