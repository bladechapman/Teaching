# Steps of the clang compiler cheatsheet


### Preprocessing step (Lexing)

```clang -E hello-world.c > hello-world.i```

This stage *tokenizes* the file hello-world.c, and expands any preprocessor directives like macros or #include


### Parsing and Semantic Analysis

Takes an input file and uses the provided tokens to generate a parse tree / abstract syntax tree. We'll discuss this step in the process more in the future.


### Code Generation

```clang -S -emit-llvm hello-world.c```

This step takes a parse tree and uses it to generate new code. In clang, this new code is LLVM IR, which can then be futher translated into other languages later. Optimization is also done during this step. An assembly file is produced as the result.


### Assembler

```clang -c hello-world.c```

This takes the intermediate representation of the file and converts it to assembly that can be run on a specific machine.
