from ssl import DER_cert_to_PEM_cert
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
		data = []
		
		for info in serializer.data:
				data.append(dict(info))

		with open('dataset.json', 'w') as outfile:
				json.dump(data, outfile,indent=7, ensure_ascii=False)
		with open("dataset.json", encoding='utf-8') as json_file:
				json_data = json.loads(json_file.read())

		helpers.bulk(es, json_data, index=index)
		return es