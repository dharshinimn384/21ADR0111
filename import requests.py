import requests

# Registration endpoint and payload
registration_url = "http://20.244.56.144/test/register"
registration_payload = {
    "companyName":"Kongu Engineering College",
    "ownerName":"Dharshini M N",
    "rollNo":"21ADR011",
    "ownerEmail":"dharsha5678@gmail.com",
    "accessCode":"vwYtrN",
}

# Perform the registration request
response = requests.post(registration_url, json=registration_payload)

# Check if registration is successful
if response.status_code == 200:
    data = response.json()
    api_key = data.get('api_key')
    print(f"Registration successful. Your API key is: {api_key}")
else:
    print("Registration failed.")
    print(response.text)