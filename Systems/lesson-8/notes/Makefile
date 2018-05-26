.PHONY: all


all: build/main.o build/splitString.o build/conshLs.o build/log.o
	clang $^ -o build/built

build/main.o: main.c
	@mkdir -p build
	clang -c $< -o $@

build/splitString.o: lib/splitString.c lib/splitString.h
	@mkdir -p build
	clang -c $< -o $@

build/log.o: lib/log.c lib/log.h
	@mkdir -p build
	clang -c $< -o $@

build/conshLs.o: lib/conshLs.c lib/conshLs.h
	@mkdir -p build
	clang -c $< -o $@

clean:
	rm -rf build

leakcheck: all
	@echo "Running with profiler"
	@leaks -outputGraph ./build/profile.memgraph -fullContent -atExit -- build/built
	@echo "Program execution completed. Analyzing memory usage..."
	@leaks build/profile.memgraph
	@rm build/profile.memgraph

run: all
	./build/built
