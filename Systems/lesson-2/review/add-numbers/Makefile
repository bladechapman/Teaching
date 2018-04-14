.PHONY: all

all: build/libaddnumbers.o build/main.o
	mkdir -p build
	clang $^ -o build/built

build/main.o: main.c
	mkdir -p build
	clang -c $< -o $@

build/libaddnumbers.o: libs/libaddnumbers.c libs/libaddnumbers.h
	mkdir -p build
	clang -c $< -o $@

clean:
	rm -rf build
