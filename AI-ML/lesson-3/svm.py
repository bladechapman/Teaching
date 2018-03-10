import numpy as np
import pandas as pd

def get_data(filename):
    return pd.read_csv(filename, header=None)

def partition_data(data):
    partition_index = int(len(data) * 0.8)
    return (data[:partition_index], data[partition_index:])

def evaluateSample(x, w, b, means=None, stds=None):
    x = rescale(x, means, stds)

    return np.dot(x, w) + b

def classify(x, w, b, means=None, stds=None):
    return np.sign(evaluateSample(x, w, b, means=means, stds=stds))

def hingeLoss(x, y, w, b, means=None, stds=None):
    return max(0, 1 - y * evaluateSample(x, w, b, means=means, stds=stds))

def descent(x, y, w, b, l, means=None, stds=None, rate=1):
    delta_w = 0
    delta_b = 0

    x = rescale(x, means, stds)

    # mean and std have already been applied if applicable
    if (hingeLoss(x, y, w, b) != 0):
        delta_w = rate * -y * x
        delta_b = rate * -y

    return ((delta_w) + (l * w), delta_b)

def rescale(x, means=None, stds=None):
    if means is not None:
        x = x - means
    if stds is not None:
        x = x / stds

    return x

def build_model(train_data, test_data, w=None, b=None, lbda=0.001, num_seasons=10, season_size=10):
    # create starting points
    w = w if w != None else np.random.random_sample(size=len(train_data.columns) - 1)
    b = b if b != None else np.random.sample()

    # discover the std and mean of each feature of the training data
    stds = train_data.apply(np.std, axis=0)[:len(train_data.columns) - 1]
    stds = stds.apply(lambda x: 1 if x == 0 else x)
    means = train_data.apply(np.mean, axis=0)[:len(train_data.columns) - 1]

    # for each season, set the learning rate and choose samples
    for i in range(num_seasons):
        # calculate a slightly diminishing learning rate for every season
        rate = 1 / (i + 1)

        # retrieve a random set of samples for this season
        indices = np.random.choice(range(len(train_data)), size=season_size, replace=False)
        xs = train_data.iloc[indices, :len(train_data.columns) - 1]
        ys = train_data.iloc[indices, len(train_data.columns) - 1]

        for j in range(len(xs)):
            x = xs.iloc[j,]
            y = ys.iloc[j,]
            delta_w, delta_b = descent(x, y, w, b, lbda, means=means, stds=stds, rate=rate)

            # for every sample, descend down the gradient
            w -= delta_w
            b -=delta_b

        # determine the accuracy so far
        confusion_matrix = test_model(test_data, w, b, means=means, stds=stds)
        accuracy = (confusion_matrix[0,0] + confusion_matrix[1,1]) / np.sum(confusion_matrix)
        print("Accuracy at season %d is %f " % (i, accuracy))

    return w, b, means, stds


def test_model(test_data, w, b, means=None, stds=None):
    confusion_matrix = np.matrix([[0,0], [0,0]])
    for i in range(len(test_data)):
        x = test_data.iloc[i,:len(test_data.columns) - 1]
        y = test_data.iloc[i,len(test_data.columns) - 1]
        predicted = 0 if classify(x, w, b, means=means, stds=stds) == -1 else 1

        confusion_matrix[predicted, y] += 1
    return confusion_matrix


# categories = [
#     'pregnancies',
#     'glucose',
#     'blood-pressure',
#     'skin-fold-thickness',
#     'insulin',
#     'bmi',
#     'diabetes-pedigree',
#     'age',
#     'class'
# ]

data = get_data('./test.data')
# data = get_data('./data/diabetes.txt')
train_data, test_data = partition_data(data)
w, b, means, stds = build_model(train_data, test_data)

print(test_model(test_data, w, b, means, stds))

# test_data.iloc[0, len(test_data.columns) - 1]

# test_data.columns
#
# test_data.iloc[0, :len(test_data.columns) - 1]
