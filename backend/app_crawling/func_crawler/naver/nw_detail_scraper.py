import requests
from bs4 import BeautifulSoup
import json
from collections import OrderedDict

# f = open("/Users/yong-gilhan/Desktop/School/4-1/시종설/github/practice/for-gilhan/detail_link_list_of_naver.json", 'r')
# with open('/Users/yong-gilhan/Desktop/School/4-1/시종설/github/practice/for-gilhan/detail_link_list_of_naver.json') as json_file:
#     json_data = json.load(json_file)

# print('1')
# link_list = json_data["links"]
# print('2')

def get_details_webtoon_info(link_json):

		def get_information(link):
				print('4')
				info = OrderedDict()

				html = requests.get(link)
				soup = BeautifulSoup(html.text, 'html.parser')

				wrt_nm = soup.find_all('span', class_='wrt_nm')
				thumb_tag = soup.find_all('div', class_='thumb')[0].find_all('img')
				title_tag = soup.find_all('span', class_='title')

				p_tag = soup.find_all('p')
				introduction = ""
				for contxt in p_tag[0]:
						if str(contxt) != '<br/>':
								introduction = introduction + str(contxt) + "\n"

				introduction = introduction[0:-1]
				genre_tag = soup.find_all('span', class_='genre')
				age_tag = soup.find_all('span', class_='age')

				info["platform"] = "naver"
				info["day"] = link[-3:]
				info["title"] = title_tag[0].text
				info["thumbnail"] = thumb_tag[0]['src']
				info["detail_link"] = link
				info["introduction"] = introduction
				info["writer"] = wrt_nm[0].text[8:]
				info["genre"] = genre_tag[0].text
				info["age"] = age_tag[0].text
				
				return info

		def get_wt_info(link_json):

				wt_list = []
				link_json = json.loads(link_json)
				for link in link_json["links"]:
						info = get_information(link)
						wt_list.append(info)
				wt_list_json = json.dumps(wt_list, ensure_ascii=False, indent="\t")
				return wt_list_json

		def save_naver_wt(link_json):
				print("link_json:", link_json)
				webtoon = OrderedDict()
				webtoon['Naver'] = json.loads(get_wt_info(link_json))
				webtoon = json.dumps(webtoon, ensure_ascii=False, indent="\t")
				
				return webtoon

		return save_naver_wt(link_json)