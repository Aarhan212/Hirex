import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelBinarizer
from keras.preprocessing.text import Tokenizer
from keras.models import Sequential
from keras.layers.core import Dense, Dropout, Activation
from keras import metrics
from sklearn.preprocessing import LabelBinarizer
from keras.preprocessing.sequence import pad_sequences
from keras.preprocessing.text import one_hot
import os

#Dataset path
dataset_path ='C:\\Users\\vipvi\Desktop\\Job-Recommendation-Engine-master\\PythonApplication\\25_cleaned_job_descriptions.csv'

#Model Path
model_path = 'C:\\Users\\vipvi\\Desktop\\Job-Recommendation-Engine-master\\PythonApplication\\model.py'

#Parameters
vocab_size=500
max_length=500
batch_size=500
nb_epoch=30

#Model Parameters
dense=512
dropout=0.1
labels=25
activation_function='relu'
last_activation_function='softmax'

#Complile Parameters
optimizer = 'adam' # or 'sgd'
loss = 'categorical_crossentropy'

#Model fit
validation_split=0.1
verbose=1

data = pd.read_csv(dataset_path, header = 0, names = ['Query', 'Description'])

train, test = train_test_split(data, test_size=0.2)
train_descs = train['Description']
train_labels = train['Query']
test_descs = test['Description']
test_labels = test['Query']

train, test = train_test_split(data, test_size=0.2)
train_descs = train['Description']
train_labels = train['Query']
test_descs = test['Description']
test_labels = test['Query']

tokenizer = Tokenizer(num_words=vocab_size)
tokenizer.fit_on_texts(train_descs)
x_train = tokenizer.texts_to_matrix(train_descs, mode='tfidf')
x_test = tokenizer.texts_to_matrix(test_descs, mode='tfidf')
encoder = LabelBinarizer()
encoder.fit(train_labels)
y_train = encoder.transform(train_labels)
y_test = encoder.transform(test_labels)

model = Sequential()
model.add(Dense(dense, input_shape=(vocab_size,)))
model.add(Activation(activation_function))
model.add(Dropout(dropout))
model.add(Dense(dense))
model.add(Activation(activation_function))
model.add(Dropout(dropout))
model.add(Dense(labels))
model.add(Activation(last_activation_function))

model.compile(loss = loss, optimizer = optimizer, metrics = [metrics.categorical_accuracy, 'accuracy'])

model.fit(x_train, y_train, batch_size=batch_size, epochs=nb_epoch, verbose=verbose, validation_split=validation_split)

# print("Saving Model...")
# model.save(model_path+".h5")

print("\n")
print("---------------------------------")
print("JOB PREDICTION APPLICATION")
print("---------------------------------")
print("\n")
print("OK the model is ready!!")
print('\n')
skills_description = input("Give me your skill description please: ")

encoded_docs = [one_hot(skills_description, vocab_size)]
padded_text = pad_sequences(encoded_docs, maxlen=max_length, padding='post')
prediction = model.predict(padded_text)
encoder = LabelBinarizer()
encoder.fit(test_labels)
result = encoder.inverse_transform(prediction)
print("\nThis job is my suggetion:", result[0])
print("Thanks for all!!")