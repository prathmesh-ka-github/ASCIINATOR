from flask import Flask, jsonify
from flask_cors import CORS
from asciinatorEndpoint import asciinatorRouter

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"])
app.register_blueprint(asciinatorRouter)

@app.route('/hello', methods=['GET'])
def hello_world():
    return jsonify(message="Hello, World!")

if __name__ == '__main__':
    app.run(debug=True)