import numpy
import scipy.stats
categories = ['pregnancies', 'glucose', 'blood-pressure', 'skin-fold-thickness', 'insulin', 'bmi', 'diabetes-pedigree', 'age', 'class']

def get_data(filename):
    parsed_data = []
    with open(filename) as data:
        for line in data:
            datum = list(map(float, line.split(',')))
            parsed_data.append(datum)

    return parsed_data

def calculate_priors(data):
    label_index = categories.index('class')
    label_priors = {}
    num_items = len(data)

    for datum in data:
        class_value = datum[label_index]
        if class_value not in label_priors:
            label_priors[class_value] = 1. / num_items
        else:
            label_priors[class_value] += 1. / num_items

    return label_priors

def calculate_gaussian(column):
    return (numpy.std(column), numpy.mean(column))


def calculate_distributions(data, priors):
    labels = priors.keys()
    label_index = categories.index('class')

    splits = [[datum for datum in data if datum[label_index] == label] for label in labels]
    gaussians = [[calculate_gaussian(map(lambda x: x[i], split)) for i in range(len(categories))] for split in splits]

    return gaussians

def classify(priors, gaussians, datum):
    likelihoods = []

    for i, feature_gaussians in enumerate(gaussians):
        prior = priors[i]
        func_pairs = zip(map(lambda x: scipy.stats.norm(x[1], x[0]), feature_gaussians[:-1]), datum[:-1])
        product = reduce(lambda x, y: x * y, map(lambda x: x[0].pdf(x[1]), func_pairs), 1)
        
        likelihood = prior * product
        likelihoods.append(likelihood)

    return likelihoods


data = get_data('./data/diabetes.txt')
priors = calculate_priors(data)
gaussians = calculate_distributions(data, priors)
print(classify(priors, gaussians, data[1]))
print(data[1][-1:])

