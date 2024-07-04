import requests
import openai
import json

# Set OpenAI API key
openai.api_key ="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"

def get_website_content(url):
    # Send a GET request to the URL
    response = requests.get(url)
    
    # Check if the request was successful
    if response.status_code == 200:
        # Extract text content from the page
        text_content = response.text
        return text_content
    else:
        # If the request was not successful, print an error message
        print("Error:", response.status_code)
        return None

def classify_data(user_input):
    content = ['name', 'ID Number', "Phone Number", "Email", "Address", "Date of Birth", "Nationality", "Account Number"]
    contribution = {}
    personal_data_present = any(keyword.lower() in user_input.lower() for keyword in content)

    for keyword in content:
        contribution[keyword] = user_input.lower().count(keyword.lower())

    if personal_data_present:
        classification = "Personal Data"
        breakdown = {keyword: 1 if keyword.lower() in user_input.lower() else 0 for keyword in content}
    else:
        classification = 0
        breakdown = {keyword: 0 for keyword in content}

    total_percentage = sum(breakdown.values())

    return classification, breakdown, total_percentage

# For testing purposes
if __name__ == "__main__":
    url = "https://ke.ncbagroup.com/mobile-internet-banking-registration/"
    website_content = get_website_content(url)
    if website_content:
        classification, breakdown, total_percentage = classify_data(website_content)
        output = {
            "Classification": classification,
            "Breakdown": breakdown,
            "Total": total_percentage
        }
        json_output = json.dumps(output)
        print(json_output)
        print("Total:", total_percentage)

