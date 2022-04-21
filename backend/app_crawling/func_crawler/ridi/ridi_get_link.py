import requests
from bs4 import BeautifulSoup
from collections import OrderedDict
import json
import time

# start = time.time()

# xlsx_name = "ridibooks_webtoon"

def ridi_url():
    start = time.time()

    
    source_url = "https://ridibooks.com/event/23727"

    req = requests.get(source_url)
    html = req.content
    soup = BeautifulSoup(html, 'lxml')
    url_list = []
    
    for href in soup.find("div", class_ = "event_detail_wrapper").find_all('h3'):
        href_f = href.find("a")
        if href_f is not None:
            url_list.append("https://ridibooks.com"+href.find("a")["href"])
        else:
            continue
    a = "time : ",time.time() - start
    print(a)
    return url_list