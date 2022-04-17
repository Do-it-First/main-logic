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

def get_detail_links():

		html = requests.get('https://comic.naver.com/webtoon/weekday')
		soup = BeautifulSoup(html.text, 'html.parser')
		
		col_inners = soup.find_all('div', class_='col_inner')

		detail_of_nw_list = []

		for col_inner in col_inners:
			for k in list(col_inner.children)[3]('a'):
					if k.get('title') != None:
							title = k.get('title')
							link = 'https://comic.naver.com' + k.get('href')
							detail_of_nw_list.append(link)

		plain = OrderedDict()

		plain['links'] = detail_of_nw_list

		link_json = json.dumps(plain, ensure_ascii=False, indent="\t")
		return link_json