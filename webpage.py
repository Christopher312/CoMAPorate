from flask import render_template, Flask
app = Flask(__name__, static_folder='/Users/Main_Account/Documents/Homework/HackTJ project/static')

@app.route('/')
def home():
    #return 'Index page'
    return render_template('index.html')

@app.route('/map')
def hello():
    return render_template("map.html")

@app.route('/place', methods = ['POST']])
def storeData():
	return None
	
def login():
	if request.method == 'POST':
		storeData()
		
if __name__ == '__main__':
    app.run(host='0.0.0.0')
	