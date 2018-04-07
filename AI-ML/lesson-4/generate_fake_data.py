#!/usr/bin/env python3

import matplotlib.pyplot as plt
import numpy as np
import random

num_samples = 1000
num_yes = int(np.random.normal(0.5, 0.05) * num_samples)

# x, y
yes_mean = (100, 100)
no_mean = (0, 0)

yes_sd = 20
no_sd = 20

data = []
for i in range(num_samples):
    if (i < num_yes):
        sample = np.random.normal(yes_mean, yes_sd, 2)
        label = 1
    else:
        sample = np.random.normal(no_mean, no_sd, 2)
        label = -1
    datum = np.concatenate([sample, [label]])

    data.append(datum)

data = np.array(data)
samples = data[:,:-1]
labels = data[:,-1:]
colorfunc = np.vectorize(lambda x: 'r' if x == 1 else 'b')
colors = np.transpose(colorfunc(labels))[0]

# plt.scatter(samples[:,0], samples[:,1], c=colors)

f = open("test.data", "w")
for i in range(len(data)):
    sample = list(data[i])
    f.write(",".join(map(str, sample)) + "\n")
f.close()
