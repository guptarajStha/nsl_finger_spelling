from django.shortcuts import render
from . import preprocess
from django.core.files.storage import FileSystemStorage
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import status
from . import prediction
from . import letterJoining
# from .serializer import VideoFrameSerializer
import datetime
import json
from rest_framework.views import APIView
# from django.utils.datastructures import MultiValueDictKeyError
import base64
# import numpy as np

import cv2
import numpy as np

from io import BytesIO
from gtts import gTTS
import mediapipe as mp
# from keras.models import load_model 

# model = load_model('model_2_20.h5')

mp_hands = mp.solutions.hands
hands = mp_hands.Hands(static_image_mode = True, min_detection_confidence=0.3, max_num_hands=1)
mp_drawing = mp.solutions.drawing_utils 
mp_drawing_styles = mp.solutions.drawing_styles

class text_to_speech(APIView):
    def post(self,request):
        text = request.data.get('text')
        mp3_fp =BytesIO()
        tts = gTTS(text,lang='ne')
        tts.write_to_fp(mp3_fp)
        mp3_fp.seek(0)
        mp3_bytes = mp3_fp.read()
        mp3_base64 = base64.b64encode(mp3_bytes).decode('utf-8')
        return JsonResponse({'mp3_base64': mp3_base64}, content_type='application/json')


class wordFormation(APIView):
    def post(self,request):
        letter_arry = request.data
        print(letter_arry)
        letter_arr = [item for item in letter_arry if item is not None]
        print(letter_arr)
        word = letterJoining.joinLetter(letter_arr)
        # letter_arr = request.data
        # print(letter_arr)
        # word = letterJoining.joinLetter(letter_arr)
        print(word)
        return JsonResponse({'word':str(word)})
        # return JsonResponse({'word':str(letter_arr)})
        
class predictLetter(APIView):
    def post(self,request):
        image_data = request.data['image']
        format ,imgstr = image_data.split(';base64,')
        ext = format.split('/')[-1]
        # image = ContentFile (base64.b64decode(imgstr), name='temp.' + ext)
        frame = base64.b64decode(imgstr)
        frame = np.fromstring(frame,np.uint8)
        frame = cv2.imdecode(frame,cv2.IMREAD_COLOR)
        # print(frame)
        image = frame.copy()
        SQUARE_SIZE =200
        results = hands.process(cv2.cvtColor(image,cv2.COLOR_BGR2RGB))
        try:
            letter,acc = prediction.prediction(image,frame,results,SQUARE_SIZE,hands)
            return JsonResponse ({'both':f"{letter},{acc}",'letter':str(letter),'acc':str(acc)})
        except Exception as e:
            print("Error:", e)
            return JsonResponse({'error': 'Internal Server Error'}, status=500)
       
#         print(image)
        # return Response(status=204)
class predictLetterOnly(APIView):
    def post(self,request):
        img = request.FILES['img']
        file_bytes = np.asarray(bytearray(img.read()), dtype=np.uint8)
        frame = cv2.imdecode(file_bytes, cv2.IMREAD_COLOR)
        image = frame.copy()
        SQUARE_SIZE =200
        results = hands.process(cv2.cvtColor(image,cv2.COLOR_BGR2RGB))
        try:
            letter,acc = prediction.prediction(image,frame,results,SQUARE_SIZE,hands)
            return JsonResponse ({'both':f"{letter},{acc}",'letter':str(letter),'acc':str(acc)})
            # letter = prediction.prediction(image,frame,results,SQUARE_SIZE,hands)
            # return JsonResponse ({'letter':str(letter)})
        except Exception as e:
            print("Error:", e)
            return JsonResponse({'error': 'Internal Server Error'}, status=500)

        # return Response(file_bytes)


# def predictLetter(request):

    
#     fileObj = request.FILES['filePath']
#     print(fileObj)
#     fs = FileSystemStorage()
#     filePathName = fs.save(fileObj.name,fileObj)
#     filePathName= fs.url(filePathName)
#     filePath = '.' +filePathName
#     print(filePath)
#     # return JsonResponse({'file':filePath})
#     # return JsonResponse({"hello":filePath})
    
#     frame = cv2.imread(filePath) 
#     print(frame)
#     SQUARE_SIZE =200 
#     if frame is None or frame.size == 0:
#         return JsonResponse({'error': 'Failed to load or empty image'}, status=400)

# #     frame = cv2.resize(frame,(540,540))
    
#     image = frame.copy()
#     results = hands.process(cv2.cvtColor(image,cv2.COLOR_BGR2RGB))
#     try:
#         letter = prediction.prediction(image,frame,results,SQUARE_SIZE,hands)
#         return JsonResponse({'letter':str(letter)})
# #         (x1,y1) = preprocess.crop_image(results,frame,SQUARE_SIZE)
# #         cropped_image = image[y1:y1+SQUARE_SIZE,x1:x1+SQUARE_SIZE]
# #         img1 = cv2.cvtColor(cropped_image,cv2.COLOR_BGR2RGB)
# #         result = hands.process(img1)
# #         mask = np.zeros_like(img1)
# #         mask = preprocess.create_hand_landmark(result,mask)
# #         masked_img = cv2.bitwise_and(img1,mask)
# #         masked_img = cv2.cvtColor(masked_img,cv2.COLOR_BGR2GRAY)
# #         test_image = masked_img.copy()
# #         test_image = preprocess.extract_features(test_image)
# #         pred  = model.predict(test_image)
# #         predi = categ[pred.argmax()]
# #         prediction_label = label[categ[pred.argmax()]]
# #         print(prediction_label)
# #         # accu = "{:.2f}".format(np.max(pred)*100)
# #         return JsonResponse({'letter':str(prediction_label)})
# #         # return JsonResponse({'success': True})
#     except Exception as e:
#         print("Error:", e)
#         return JsonResponse({'error': 'Internal Server Error'}, status=500)
       
    
