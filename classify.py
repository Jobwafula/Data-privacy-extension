import openai

#openai.api_key = "sk-proj-JiOBs8VOYj5QzVYB6o6cT3BlbkFJt5BEmUx33rLPRrImIbSl"
openai.api_key ="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"
def classify_data(user_input):
    content = ['name', 'ID Number', "Phone Number", "Email", "Address", "Date of Birth", "Nationality"]
    contribution = {}
    personal_data_present = any(keyword.lower() in user_input.lower() for keyword in content)

    for keyword in content:
        contribution[keyword] = user_input.lower().count(keyword.lower())

    if personal_data_present:
        classification = "Personal Data"
        breakdown = {keyword: (contribution[keyword] / len(keyword)) * 100 for keyword in content if keyword.lower() in user_input.lower()}
    else:
        classification = "Public Data"
        breakdown = {keyword: 0 for keyword in content}

    total_percentage = sum(breakdown.values())

    return classification, breakdown, total_percentage

# For testing purposes
if __name__ == "__main__":
    user_input = input("Enter the data values filled in the website: ")
    classification, breakdown, total_percentage = classify_data(user_input)
    print("Classification:", classification)
    print("Breakdown:")
    for keyword, percentage in breakdown.items():
        print(keyword, ":", percentage, "%")
    print("Total Percentage:", total_percentage, "%")
