from flask import render_template, Flask
app = Flask(__name__)

@app.route('/')
def home():
    #return 'Index page'
    return render_template('index.html')

@app.route('/hello')
def hello():
    return 'Hello world'

if __name__ == '__main__':
    app.run(host='0.0.0.0')