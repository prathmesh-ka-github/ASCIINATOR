from flask import Blueprint, request
from Services.AsciinatorService import convert_to_ascii_image 
from flask import send_file
from PIL import Image
import io
asciinatorRouter = Blueprint('asciinator', __name__)

"""
Takes an image file from the request, processes it, and returns an ASCII art representation.
"""
@asciinatorRouter.route('/asciinator', methods=['POST'])
def asciinator():
    if 'file' not in request.files:
        return {'error': 'No file part in the request'}, 400
    print("fetching file")
    file = request.files['file']
    print(file.filename)
    if file.filename == '':
        return {'error': 'No selected file'}, 400
    # read the image file in binary mode
    image = Image.open(file)
    # convert the image to ASCII art
    ascii_image = convert_to_ascii_image(image)
    ## save image to buffer
    img_io = io.BytesIO()
    ascii_image.save(img_io, format='PNG')
    img_io.seek(0)

    return send_file(img_io, mimetype='image/png')

    

    