from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('home/index.html') 

@app.route("/about-me")
def about_me():
    return render_template('about-me/index.html')

@app.route("/events")
def events():
    return render_template('events/index.html')

@app.route("/press")
def press():
    return render_template('press/index.html')


@app.route("/blog")
def blog():
    return render_template('blog/index.html')

@app.route("/join-our-network")
def join_our_networks():
    return render_template('join-our-network/index.html')

@app.route("/connect")
def connect():
    return render_template('connect/index.html')

if __name__ == "__main__":
    app.run(debug=True)
