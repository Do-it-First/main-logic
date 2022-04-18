from django.shortcuts import render
from .search_engine_info import functions
from rest_framework.parsers import JSONParser

from app_crawling.models import Navertoon
from app_crawling.serializers import NavertoonSerializer

# APIView를 사용하기 위해 import
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404

# bulk로 mongodb를 elasticsearch에 주입
es, index = functions.bulk_setting()
es = functions.bulk_data(es)

# Create your views here.

# Crawled_Webtoon의 목록을 보여주는 역할
class Search_from_keyward(APIView):

    # parser_classes = [JSONParser]
    
    # Blog list를 보여줄 때
    def get(self, request):

				# 검색어
        query = request.GET.get('search')
        print(es)
        if not query:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={'message': 'search word param is missing'})
        docs = es.search(index="webtoonsearch",
													body={
															"query": {
																	"multi_match": {
																			"query": query,
																			"fields": ["platform", "day", "title", "introduction", "writer", "genre", "age"]
																	}
															}
													})

        data_list = docs
        # data_list = docs['hits']

        return Response(data_list)