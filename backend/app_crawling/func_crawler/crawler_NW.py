from .naver.get_links_from_naver import get_detail_links
from .naver.nw_detail_scraper import *

class Crawler:
		def naver():
					link_json = get_detail_links()
					crawled_data = get_details_webtoon_info(link_json)
					return crawled_data

		def ridi():

					print('here is crawler for ridi webtoons!~')

		def other():

					print('here is crawler for other webtoons!~')