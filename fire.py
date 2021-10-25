import RPi.GPIO as GPIO
from firebase import firebase
import time
GPIO.setmode(GPIO.BOARD)
GPIO.setup(12,GPIO.OUT)
firebase = firebase.FirebaseApplication('https://meity-40d5f-default-rtdb.firebaseio.com', None)
while True:
	result = firebase.get('GF/R1', 'Light')
	if(result==1):
		GPIO.output(12,1);
	else:
		GPIO.output(12,0);