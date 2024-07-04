from flask import Flask, jsonify, request
from classify import classify_data

app = Flask(__name__)

@app.route('/api/data', methods=['POST'])
def get_data():
    # Get the data from the request body
    user_input = request.json.get('user_input')

    # Call the classify_data function from classify.py to get the data output
    classification, breakdown, total_percentage = classify_data(user_input)

    # Return the data as a JSON response
    return jsonify({
        'classification': classification,
        'breakdown': breakdown,
        'total_percentage': total_percentage
    })

if __name__ == '__main__':
    # Collect user input via CLI
    user_input = input("Enter the data values filled in the website: ")
    
    # Call classify_data function with user input
    classification, breakdown, total_percentage = classify_data(user_input)
    
    # Print classification results
    print("Classification:", classification)
    print("Breakdown:")
    for keyword, percentage in breakdown.items():
        print(keyword, ":", percentage, "%")
    print("Total Percentage:", total_percentage, "%")
