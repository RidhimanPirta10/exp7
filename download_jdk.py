import urllib.request
url = 'https://api.adoptium.net/v3/binary/latest/17/ga/windows/x64/jdk/hotspot/normal/eclipse'
print('downloading', url)
urllib.request.urlretrieve(url, 'jdk.zip')
print('done')
