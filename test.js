/* eslint-disable no-magic-numbers */
import {test} from "tap"

import first from "./index"

test(({same, end}) => {
  same(
    first([1, 2, 3]),
    1
  )

  end()
})

test(({same, end}) => {
  same(
    first("abc"),
    "a"
  )

  end()
})
