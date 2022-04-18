from elasticsearch import Elasticsearch, helpers
import json

from app_crawling.models import Navertoon
from app_crawling.serializers import NavertoonSerializer

es = Elasticsearch(
	hosts=["http://elasticsearch:9200"],
	http_auth=['elastic', 'changeme']
	)
index = "webtoonsearch"

def bulk_setting():
		with open('./app_search/search_engine_info/mapper.json', 'r') as f:
				mapped = json.load(f)

		if es.indices.exists(index=index):
				es.indices.delete(index=index)

		es.indices.create(
				index=index,
				body=mapped
		)

		return es, index

def bulk_data(es):

		nw_objects = Navertoon.objects.all()
		serializer = NavertoonSerializer(nw_objects, many=True)


		# json_list = []
		# print(type(serializer.data))

		body = ""
		count = 1
		for i in serializer.data:
				body = body + json.dumps(
					{
						"index": {
							"_index": index,
									"_id": count
							}
						}
				) + '\n'
				body = body + json.dumps(i, ensure_ascii=False) + '\n'
				if count == 1:
						print("body: ", body)
				count += 1

		# print(body)
		es.bulk(body=body)
		return es
		# for orderedict in serializer.data:
		# 		orderedict = json.dumps(orderedict, ensure_ascii=False)
		# 		json_list.append(orderedict)

		
		# print(type(json_list))
		# # print(json_list)
		# print(type(json_list[0]))
		# print(json_list[0])

    # helpers.bulk(es, json_data, index=index)
