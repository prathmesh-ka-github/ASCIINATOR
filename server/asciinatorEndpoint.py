from flask import Blueprint, request
from Services.AsciinatorService import convert_to_ascii_image 
from flask import send_file

asciinatorRouter = Blueprint('asciinator', __name__)

"""
Takes an image file from the request, processes it, and returns an ASCII art representation.
"""
@asciinatorRouter.route('/asciinator', methods=['POST'])
def asciinator():
    if 'file' not in request.files:
        return {'error': 'No file part in the request'}, 400
    
    file = request.files['file']
    
    if file.filename == '':
        return {'error': 'No selected file'}, 400
    
    try:
        image = file.read()
        input_file_name = file.filename
        output_file_name = "output-"+request.form.get('output_file_name', input_file_name)
        font_size = int(request.form.get('font_size', 30))      
        # print(image) 
        return send_file(image, mimetype='image/jpg', as_attachment=True, download_name=output_file_name)
    except Exception as e:  
        return {'error': str(e)}, 500

        

    