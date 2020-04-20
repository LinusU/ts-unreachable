# Unreachable for TypeScript

Utility function for exhaustiveness checking with TypeScript.

## Installation

```sh
npm install --save ts-unreachable
```

## Usage

```typescript
import unreachable = require('ts-unreachable')

type Shape =
  | { kind: 'square', size: number }
  | { kind: 'rectangle', width: number, height: number }
  | { kind: 'circle', radius: number }

function area (shape: Shape): number {
  if (shape.kind === 'square') {
    return shape.size ** 2
  }

  if (shape.kind === 'rectangle') {
    return shape.height * shape.width
  }

  if (shape.kind === 'circle') {
    return Math.PI * shape.radius ** 2
  }

  return unreachable(shape) // (1)
}
```

1. Without the final call to unreachable, TypeScript would report the following error:

   > Function lacks ending return statement and return type does not include 'undefined'. (2366)

   Calling the function with an invalid kind from JavaScript would also return `undefined` instead of throwing a `TypeError`.

## Related Packages

- [`ts-todo`](https://github.com/LinusU/ts-todo)
- [`ts-unimplemented`](https://github.com/LinusU/ts-unimplemented)
- [`ts-unwrap`](https://github.com/LinusU/ts-unwrap)

## Prior Art

- Npm [`unreachable` package](https://github.com/Gozala/unreachable)
- Rust [`unreachable` macro](https://doc.rust-lang.org/std/macro.unreachable.html)
