import requests
from bs4 import BeautifulSoup
import json
from collections import OrderedDict

week = [
	"mon",
	"tue",
	"wed",
	"thu",
	"fri",
	"sat",
	"sun",
]

html = requests.get('https://comic.naver.com/webtoon/weekday')
soup = BeautifulSoup(html.text, 'html.parser')
doc = soup.prettify()

with open('NW.html', 'w') as html_file:
    html_file.write(doc)

col_inners = soup.find_all('div', class_='col_inner')

detail_of_nw_list = []

for col_inner in col_inners:
		for k in list(col_inner.children)[3]('a'):
				# i = i + 1
				if k.get('title') != None:
						title = k.get('title')
						link = 'https://comic.naver.com' + k.get('href')
						detail_of_nw_list.append(link)

plain = OrderedDict()

plain['links'] = detail_of_nw_list

link_json = json.dumps(plain, ensure_ascii=False, indent="\t")
print(link_json)

file = open("detail_link_list_of_naver.json", 'w')
file.write(link_json)
file.close()