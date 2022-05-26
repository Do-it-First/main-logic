# 데이터 처리
import json
from os import link
from .models import Navertoon
from .serializers import NavertoonSerializer
from .func_crawler.crawler_NW import Crawler
from bson.objectid import ObjectId
from app_search.search_engine_info import functions

from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi

# APIView를 사용하기 위해 import
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404

# Crawled_Webtoon의 목록을 보여주는 역할


class WebToonList(APIView):

    parser_classes = [JSONParser]

    # Blog list를 보여줄 때
    def get(self, request):

        platform = request.GET.get('platform')
        if not platform:
            nw_objects = Navertoon.objects.all()
            # 여러 개의 객체를 serialization하기 위해 many=True로 설정
            serializer = NavertoonSerializer(nw_objects, many=True)

            es, index = functions.bulk_setting()
            es = functions.bulk_data(es)
            return Response(serializer.data)
        else:
            all_objects = Navertoon.objects.all()
            nw_objects = Navertoon.objects.filter(platform=platform)
            print("all_objects_num: ", len(all_objects))
            print("nw_objects: ", len(nw_objects))

            serializer = NavertoonSerializer(nw_objects, many=True)
            es, index = functions.bulk_setting()
            es = functions.bulk_data(es)
            return Response(serializer.data)

    # 새로운 Blog 글을 작성할 때

    def post(self, request):
        # request.data는 사용자의 입력 데이터
        serializer = NavertoonSerializer(
            data=json.loads(request.body.decode("UTF-8")))
        if serializer.is_valid():  # 유효성 검사
            serializer.save()  # 저장
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Blog의 detail을 보여주는 역할


class WebToonDetail(APIView):
    # Blog 객체 가져오기
    def get_object(self, pk):
        try:
            pk = ObjectId(pk)
            return Navertoon.objects.get(_id=pk)
        except Navertoon.DoesNotExist:
            raise Http404

    # Blog의 detail 보기
    def get(self, request, pk, format=None):
        nw_object = self.get_object(pk)
        serializer = NavertoonSerializer(nw_object)
        return Response(serializer.data)

    # Blog 수정하기
    def put(self, request, pk, format=None):
        nw_object = self.get_object(pk)
        serializer = NavertoonSerializer(nw_object, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # Blog 삭제하기
    def delete(self, request, pk, format=None):
        nw_object = self.get_object(pk)
        nw_object.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# Crawled_Webtoon의 목록을 보여주는 역할


class Crawling(APIView):

    parser_classes = [JSONParser]

    # 새로운 Blog 글을 작성할 때
    platform = openapi.Parameter('platform', openapi.IN_QUERY, description='플랫폼',
                                 required=True, default="naver", type=openapi.TYPE_STRING)

    # @swagger_auto_schema(manual_parameters=[bstopId], responses={200: "Success"})
    @swagger_auto_schema(manual_parameters=[platform], responses={200: "Success"})
    def get(self, request):

        if request.GET.get('platform', None) == "naver":
            Navertoon.objects.filter(platform="naver").delete()
            link_json = json.loads(Crawler.naver())
            response_json = []
            for webtoon in link_json["Naver"]:
                # request.data는 사용자의 입력 데이터
                serializer = NavertoonSerializer(data=webtoon)
                try:
                    if serializer.is_valid():  # 유효성 검사
                        serializer.save()  # 저장
                        response_json.append(serializer.data)
                except:
                    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            return Response(response_json, status=status.HTTP_201_CREATED)
        elif request.GET.get('platform', None) == "ridi":
            return Response("Logics for ridi required!", status=status.HTTP_400_BAD_REQUEST)

        else:
            return Response("additional tasks required!!", status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request):
        objects = Navertoon.objects.all()
        objects.delete()
        return Response("data deleted", status=status.HTTP_200_OK)
