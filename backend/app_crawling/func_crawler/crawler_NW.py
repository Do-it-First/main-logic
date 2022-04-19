from .naver.get_links_from_naver import get_detail_links
from .naver.nw_detail_scraper import *
from .ridi.ridi_books_info import ridi_info
from .ridi.ridi_excel_to_json import ridi_to_json

class Crawler:
		def naver():
					link_json = get_detail_links()
					crawled_data = get_details_webtoon_info(link_json)
					return crawled_data

		def ridi():
					info_ridi = ridi_info()
					crawled_data_ridi = ridi_to_json(info_ridi)
					return crawled_data_ridi
					# print('here is crawler for ridi webtoons!~')

		def other():

					print('here is crawler for other webtoons!~')