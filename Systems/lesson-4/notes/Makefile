.PHONY: all

all: build/main.o build/log.o build/splitString.o
	clang $^ -o build/built

build/main.o: main.c
	@mkdir -p build
	clang -c $< -o $@

build/log.o: lib/log.c lib/log.h
	@mkdir -p build
	clang -c $< -o $@

build/splitString.o: lib/splitString.c lib/splitString.h
	@mkdir -p build
	clang -c $< -o $@

clean:
	rm -rf build

leakcheck: all
	@echo "Running with profiler"
	@leaks -outputGraph ./profile.memgraph -fullContent -atExit -- build/built
	@echo "Program execution completed. Analyzing memory usage..."
	@leaks profile.memgraph
	@rm profile.memgraph
