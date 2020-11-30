/* eslint-disable no-magic-numbers */

export default function first<A> (orderedList: OrderedArray<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string): A | string | void {
  return orderedList[0];
}
