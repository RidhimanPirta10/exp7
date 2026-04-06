import urllib.request
url = 'https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-windows-amd64.zip'
urllib.request.urlretrieve(url, 'ngrok.zip')
print('downloaded')