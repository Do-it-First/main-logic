from .search_engine_info import functions


# APIView를 사용하기 위해 import
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import JSONParser
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi

# bulk로 mongodb를 elasticsearch에 주입
es, index = functions.bulk_setting()
es = functions.bulk_data(es)

#  searched_data 목록을 보여주는 역할


class Search_from_keyward(APIView):

    parser_classes = [JSONParser]

    search = openapi.Parameter('search', openapi.IN_QUERY, description='검색어',
                               required=True, default="검색어", type=openapi.TYPE_STRING)

    # @swagger_auto_schema(manual_parameters=[bstopId], responses={200: "Success"})
    @swagger_auto_schema(manual_parameters=[search], responses={200: "Success"})
    def get(self, request):

        # 검색어
        query = request.GET.get('search')
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

        # data_list = docs
        data_list = docs['hits']

        return Response(data_list, status=status.HTTP_200_OK)
