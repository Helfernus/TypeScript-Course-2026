function add(a: number, b: number) {
  return a + b;
}

type addFn = typeof add; // Not exactly the return value type
type returnValueType<T> = T extends (...args: any[]) => infer RV ? RV : never; //Infer extracts the 

type addFnReturnValueType = returnValueType<typeof add>;
type addFnReturnValueType2 = ReturnType<typeof add>; //TypeScript Official Utility Type