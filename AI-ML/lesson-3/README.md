The goal of a support vector machine (and most machine learning algorithms) is to minimize some cost function. I nthe case of the support vector machine, that is the Hinge Loss (https://en.wikipedia.org/wiki/Hinge_loss) (max(0, 1-y\*mx+b)). The support vector machinee tries to determine a line that accurately separates the provided data. By attempting to maximize the distance between the line and every point, it builds up a "dead zone" buffer that improves its overall accuracy (this is known as generalization). We progressively improve the line using a process called Gradient Descent. This is where we use the derivative of the cost function (Hinge Loss) to figure out which direction to move the line.

SVM Wikipedia: https://en.wikipedia.org/wiki/Support_vector_machine

AI/ML Book: http://luthuli.cs.uiuc.edu/~daf/courses/LearningCourse17/learning-book-Jan-18-all-small.pdf
Support Vector Machine Video: https://www.youtube.com/watch?v=eUfvyUEGMD8

Hinge Loss: https://en.wikipedia.org/wiki/Hinge_loss

Real-Life applications of SVMs: https://data-flair.training/blogs/applications-of-svm/
