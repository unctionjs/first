/* eslint-disable no-magic-numbers */
import {OrderedEnumerableType} from "./types";

export default function first<A> (orderedList: OrderedEnumerableType<A>): A | string | void {
  return orderedList[0];
}
