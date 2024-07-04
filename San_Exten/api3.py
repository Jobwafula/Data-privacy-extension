from flask import Flask, render_template, request
import json
from classify2 import classify_data, get_website_content

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('templates/index.html')

@app.route('/classify', methods=['POST'])
def classify():
    url = request.form['url']
    website_content = get_website_content(url)
    
    if website_content:
        classification, breakdown, total_percentage = classify_data(website_content)
        output = {
            "Classification": classification,
            "Breakdown": breakdown,
            "Total": total_percentage
        }
        return render_template('templates/result.html', output=output)
    else:
        return "Error: Unable to fetch website content."

if __name__ == '__main__':
    app.run(debug=True)
