# TS 一些技巧

原文：[https://www.ably.io/blog/typescript-is-making-programming-better](https://www.ably.io/blog/typescript-is-making-programming-better)

## What’s improved for us

After migrating to TypeScript it’s not only easier to catch any errors caused mainly due to bad typing it also makes maintenance, especially further refactoring of code, extremely easy. Since TypeScript includes enough information about types within the code itself you can completely do away with JSdocs. New engineers joining the team therefore find it easier to quickly onboard themselves just by reading through the code.

## Tips & Tricks: What no one told you about TypeScript

1. noImplicitAny: Failing to annotate function parameters and class methods will lead TypeScript to implicitly consider the type as any. This defeats the very purpose of using TypeScript for type checking as these places are mostly prone to type errors. To avoid this, you can set the noImplicityAny flag in the tsconfig file which forces you to annotate these, even if that means you explicitly specify any as a type.

2. Object vs Any: If you don’t know which parameters a type will have, prefer the object type or { [key: string]: any } to any.

3. Wherever possible, use object type instead of any, since it is more restrictive in terms of the existence of certain constructs.

4. Function Overloads: Use function overloads where multiple call signatures are expected. This improves safety, readability and type inference and provides better editor suggestions.

5. Function and class return types: Consider not always adding return types to short functions if it’s obvious. These can generally be inferred by the compiler implicitly, while adding them would add an unnecessary visual noise.

6. Const variables rarely require type declarations: For some variables such as const MAX_NUM: number = 1000 skipping the type would cause no harm in terms of understanding the variable type as it is pretty obvious, so it would make more sense to declutter the code by skipping this info.

7. Make use of interfaces where possible vs. classes: Interfaces allow duck typing so they give you much more flexibility in terms of how you would like to pass on function arguments while still ensuring correct types. This is not possible with classes.
