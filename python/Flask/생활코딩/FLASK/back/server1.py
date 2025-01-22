from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

next_id = 4
topics = [
  {'id': 1, 'title': 'html', 'body': 'html is ...'},
  {'id': 2, 'title': 'css', 'body': 'css is ...'},
  {'id': 3, 'title': 'javascript', 'body': 'javascript is ...'}
]

@app.route('/topics', methods=['GET'])
def get_topics():
  return jsonify(topics)

@app.route('/topics/<int:id>', methods=['GET'])
def get_topic(id):
  topic = next((t for t in topics if t['id'] == id), None)

  if topic:
    return jsonify(topic)
  
  return jsonify({'error': 'Topic not found'}), 404

@app.route('/topics', methods=['POST'])
def create_topic():
  global next_id
  data = request.json
  new_topic = {'id': next_id, 'title': data['title'], 'body': data['body']}
  topics.append(new_topic)
  next_id += 1

  return jsonify(new_topic), 201

@app.route('/topics/<int:id>', methods=['PUT'])
def update_topic(id):
  data = request.json

  for topic in topics:
    if topic['id'] == id:
      topic['title'] = data['title']
      topic['body'] = data['body']

      return jsonify(topic)
      
  return jsonify({'error': 'Topic not found'}), 404

@app.route('/topics/<int:id>', methods=['DELETE'])
def delete_topic(id):
  global topics
  topics = [t for t in topics if t['id'] != id]

  return '', 204