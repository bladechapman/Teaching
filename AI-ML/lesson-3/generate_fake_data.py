#!/usr/bin/env python3

import random

n = 10
m = random.sample(range(n), 5)
l = 2

num_samples = 1000

f = open("test.data", "w")

for i in range(num_samples):
    sample = [0] * 10
    num_on = random.randint(0, len(m))
    indices = random.sample(m, num_on)
    for j in indices:
        sample[j] = 1

    if random.random() > 0.1:
        if num_on >= l:
            sample.append("active")
        else:
            sample.append("inactive")
    else:
        sample.append("?")

    f.write(",".join(list(map(str, sample))) + "\n")

f.close()
