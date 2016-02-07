from flask import render_template, Flask, request, json
dictionary = {}
app = Flask(__name__, static_folder='/Users/Main_Account/Documents/Homework/HackTJ project/static')

@app.route('/')
def home():
    #return 'Index page'
    return render_template('index.html')

@app.route('/washingtondc')
def washington():
    return render_template("washingtondc.html")

@app.route('/westmiddle')
def middle():
    return render_template('westmiddle.html')

@app.route('/place', methods = ['POST'])
def storeData():
    values = request.form
    #print(values)
    x = values["xCoordinate"]
    y = values["yCoordinate"]
    name = values["name"]
    file1 = open("data.txt", "wa")
    #file1.write(x+" "+y + " " + name)
    temp = list()
    temp.append(name)
    dictionary[x+","+y]=temp
    return "ok"

@app.route("/getInfo", methods = ['GET'])
def getData():
    global dictionary
    #print(dictionary)
    #values = request.form
    #print(values)
    #x = values["xCoordinate"]
    #y = values["yCoordinate"]
    #print(x)
    return json.dumps(dictionary)

@app.route('/modify', methods = ['POST'])
def modifyData():
    global dictionary
    values = request.form
    x = values['xCoordinate']
    y = values['xCoordinate']
    tagName = values['tagName']
    tagValue = values['tagValue']
    dictionary[x+","+y].append(tagName)
    dictionary[x+","+y].append(tagValue)
    
def login():
    if request.method == 'POST':
        storeData()
        
if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
    