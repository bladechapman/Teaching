#!/usr/bin/env python3

import pandas as pd
import numpy as np

# filter the data appropriately
# dtypes = {i: str for i in range(5410)}
# df = pd.read_csv("K9.data", header=None, dtype=dtypes)
df = pd.read_csv("test.data", header=None)
df = df.dropna(axis=1, how="all")
class_index = len(df.columns) - 1
newcol = df[class_index].map(lambda x: 1 if x == "active" else "?" if x == "?" else -1)
df[class_index] = newcol
df = df.apply(lambda r: pd.to_numeric(r, errors='coerce'), axis=0)
df = df.dropna(axis=0, how="any")

# create a data partition for training and test
s = np.random.choice(range(len(df)), size=len(df), replace=False)
te = s[:int(len(s) / 10)]
tr = s[int(len(s) / 10):]
test_data = df.iloc[te,]
train_data = df.iloc[tr,]

print("DATA READY...")

# define some learning functions
def evaluateSample(x, w, b, means=None, stds=None):
    # rescale data
    if means is not None:
        x = x - means
    if stds is not None:
        x = x / stds

    return np.dot(x, w) + b

def classify(x, w, b, means=None, stds=None):
    return np.sign(evaluateSample(x, w, b, means=means, stds=stds))

def hingeLoss(x, y, w, b, means=None, stds=None):
    return max(0, 1 - y * evaluateSample(x, w, b, means=means, stds=stds))

def descent(x, y, w, b, l, means=None, stds=None, rate=1):
    delta_w = 0
    delta_b = 0

    # rescale data
    if means is not None:
        x = x - means
    if stds is not None:
        x = x / stds

    # mean and std have already been applied if applicable
    if (hingeLoss(x, y, w, b) != 0):
        delta_w = rate * -y * x
        delta_b = rate * -y

    return ((delta_w) + (l * w), delta_b)

def buildModel(
    train_data,
    w = np.random.random_sample(size=len(df.columns) - 1),
    b = np.random.sample(),
    l=0,
    num_seasons=10,
    season_size=50):

    # discover the std and mean of each feature of the training data
    stds = train_data.apply(np.std, axis=0)[:len(train_data.columns) - 1]
    stds = stds.apply(lambda x: 1 if x == 0 else x)
    means = train_data.apply(np.mean, axis=0)[:len(train_data.columns) - 1]

    # for each season, set the learning rate and choose samples
    for i in range(num_seasons):
        rate = 1 / (i + 1)

        indices = np.random.choice(range(len(train_data)), size=season_size, replace=False)
        xs = train_data.iloc[indices, :len(train_data.columns) - 1]
        ys = train_data.iloc[indices, len(train_data.columns) - 1]

        # train on samples and learning rate
        for j in range(len(xs)):
            x = xs.iloc[j,]
            y = ys.iloc[j,]
            delta_w, delta_b = descent(x, y, w, b, l, means=means, stds=stds, rate=rate)

            w -= delta_w
            b -= delta_b


        # print accuracy every season
        confusion_matrix = testModel(w, b, test_data, means=means, stds=stds)
        accuracy = (confusion_matrix[0,0] + confusion_matrix[1,1]) / np.sum(confusion_matrix)
        print(accuracy)

    return w, b, means, stds

def testModel(w, b, test_data, means=None, stds=None):
    # confusion matrix
    confusion_matrix = np.matrix([[0,0],[0,0]])
    for i in range(len(test_data)):
        x = test_data.iloc[i,:len(test_data.columns) - 1]
        y = 0 if test_data.iloc[i,len(test_data.columns) - 1] == -1 else 1
        predicted = 0 if classify(x, w, b, means=means, stds=stds) == -1 else 1

        confusion_matrix[predicted, y] += 1
    return confusion_matrix

print("TRAINING NOW")

# build multiple models with different regularization parameters
# candidate_lambdas = [0.001, 0.0001, 0.00001
candidate_lambdas = [0.0001]
models = {}
for l in candidate_lambdas:
    print("L = {}".format(l))
    w, b, means, stds = buildModel(train_data, l=l, num_seasons=10, season_size=40)
    confusion_matrix = testModel(w, b, test_data, means=means, stds=stds)
    accuracy = (confusion_matrix[0,0] + confusion_matrix[1,1]) / np.sum(confusion_matrix)
    models[l] = {
        "w": w,
        "b": b,
        "accuracy": accuracy,
        "mat": confusion_matrix
    }

best_lambda = max(models, key=lambda x: models[x]["accuracy"])
print("accuracy", models[best_lambda]["accuracy"])
print(models[best_lambda]["mat"])
print("actual along x axis")
print("predicted along y axis\n")

print("W", models[best_lambda]["w"])
print("B", models[best_lambda]["b"])
print("LAMBDA", best_lambda)
