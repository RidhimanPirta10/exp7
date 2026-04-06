import urllib.request

url = 'https://api.adoptium.net/v3/binary/latest/17/ga/windows/x64/jdk/hotspot/normal/eclipse'
request = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(request) as response, open('jdk.zip', 'wb') as out:
    out.write(response.read())
print('done')
