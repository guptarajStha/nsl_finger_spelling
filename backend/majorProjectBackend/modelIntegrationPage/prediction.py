from . import preprocess
import cv2 
import numpy as np
from keras.models import load_model 
from django.http import JsonResponse

model = load_model('model_exceptRI.h5')

categ =[0, 1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 2, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 3, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 4, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 5, 6, 7, 8, 9]
label = ['अ','आ', 'इ', 'ई', 'उ', 'ऊ', 'ए', 'ऐ', 'ओ', 'औ','क' , 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ','ट', 'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ','ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह','क्ष', 'त्र', 'ज्ञ', 'श्र','्','्र','blank']

def prediction(image,frame,results,SQUARE_SIZE,hands):

    (x1,y1) = preprocess.crop_image(results,frame,SQUARE_SIZE)
    cropped_image = image[y1:y1+SQUARE_SIZE,x1:x1+SQUARE_SIZE]
    img1 = cv2.cvtColor(cropped_image,cv2.COLOR_BGR2RGB)
    result = hands.process(img1)
    mask = np.zeros_like(img1)
    mask = preprocess.create_hand_landmark(result,mask)
    masked_img = cv2.bitwise_and(img1,mask)
    masked_img = cv2.cvtColor(masked_img,cv2.COLOR_BGR2GRAY)
    test_image = masked_img.copy()
    test_image = preprocess.extract_features(test_image)
    pred  = model.predict(test_image)
    predi = categ[pred.argmax()]
    prediction_label = label[categ[pred.argmax()]]
    accu = "{:.2f}".format(np.max(pred)*100)
    return prediction_label,accu
    

