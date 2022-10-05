import cv2
import pytesseract

pytesseract.pytesseract.tesseract_cmd = 'C:\\Program Files\\Tesseract-OCR\\tesseract.exe'
img = cv2.imread('img.jpg')
img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
print(pytesseract.image_to_string(img))
himg,wimg,_  = img.shape
boxes = pytesseract.image_to_boxes(img)
for b in boxes.splitlines():
    #print(b)
    b = b.split(' ')
    print(b)
    x, y, w, h = int(b[1]), int(b[2]), int(b[3]), int(b[4])
    cv2.rectangle(img, (x, himg-y), (x, himg-h), (2, 2, 255), 1)
cv2.imshow('Result', img)
cv2.waitKey(0)