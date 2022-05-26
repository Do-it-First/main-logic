from django.shortcuts import render
from .models import Time
from .serializers import TimeSerializer

# APIView를 사용하기 위해 import
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
# Create your views here.


class TimeAPI(APIView):

    parser_classes = [JSONParser]

    def post(self, request):
        time_sz = TimeSerializer(data={
            "counted": 0
        })
        if time_sz.is_valid():
            time_sz.save()
            return Response(time_sz.data, status=status.HTTP_201_CREATED)

        return Response(time_sz.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        # time_obj = Time.objects.all()
        time_obj = Time.objects.order_by('-last_time')
        for i in time_obj.values():
            print(i['last_time'])
            print(type(i['last_time']))
        return Response(TimeSerializer(time_obj, many=True).data)
