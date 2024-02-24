import mediapipe as mp 
import os 
import cv2 
import numpy as np

mp_hands = mp.solutions.hands
hands = mp_hands.Hands(static_image_mode = True, min_detection_confidence=0.3, max_num_hands=1)
mp_drawing = mp.solutions.drawing_utils 
mp_drawing_styles = mp.solutions.drawing_styles
categ =[]
label = ['अ','आ', 'इ', 'ई', 'उ', 'ऊ', 'ऋ', 'ए', 'ऐ', 'ओ', 'औ','क' , 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ','ट', 'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ','ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह','क्ष', 'त्र', 'ज्ञ', 'श्र','्','्र','blank']

def crop_image(results,frame,SQUARE_SIZE):
    if results.multi_hand_landmarks:
        hand_landmarks = results.multi_hand_landmarks[0]
        
        x = hand_landmarks.landmark[9].x * frame.shape[1]
        y = hand_landmarks.landmark[9].y * frame.shape[0]
        
        w = hand_landmarks.landmark[12].x * frame.shape[1] - x
        h = hand_landmarks.landmark[12].y * frame.shape[0] -y 
        
        x_center = int(x)
        y_center = int(y)
        
        x1 = int(x_center - SQUARE_SIZE/2)
        y1= int(y_center - SQUARE_SIZE/2)
        cv2.rectangle(frame, (x1, y1), (x1 + SQUARE_SIZE, y1 + SQUARE_SIZE), 
                      (0, 255, 0), 2)
        return (x1,y1)
def create_hand_landmark(results,mask):
    if results.multi_hand_landmarks:
        for hand_landmarks in results.multi_hand_landmarks:
            mp_drawing.draw_landmarks(mask,
                                      hand_landmarks,
                                      mp_hands.HAND_CONNECTIONS,
                                      mp_drawing_styles.DrawingSpec(color=(255,0,255),thickness=1,circle_radius=1),
                                      mp_drawing_styles.DrawingSpec(color=(255,0,255),thickness=1,circle_radius=1))
    return mask
def extract_features(image):
    feature = np.array(image)
    feature = feature.reshape(1,200,200,1)
    return feature/255.0
