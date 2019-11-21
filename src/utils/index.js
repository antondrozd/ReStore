export const compose = (...functions) => Component =>
  functions.reduceRight((Comp, fn) => fn(Comp), Component)
