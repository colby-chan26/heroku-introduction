from flask import Flask, jsonify, request, send_from_directory
import os 
# from flask_cors import CORS

names = {
    "colby": 'chan',
    "mark": 'liao'
}

app = Flask(__name__, static_folder="frontend/hw6/build", static_url_path="")
# CORS(app)

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/name', methods=['GET'])
def getLastName():
    lastName = request.args.get('lastName', default= '*', type = str)
    if lastName in names:
        return jsonify({"result": names[lastName]})
    else:
        return jsonify({"result": "ERROR: try again"})


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))