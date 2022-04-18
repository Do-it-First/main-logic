# serializers.py
from rest_framework import serializers

from app_crawling.models import Navertoon

class NavertoonListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Navertoon
        fields = (
            '_id',
            'platform',
            'day',
            'title',
            'thumbnail',
            'detail_link',
            # 'introduction',
            'writer',
            'genre',
            'age',
            )
        # fields = '__all__'
class NavertoonSearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Navertoon
        fields = (
            # '_id',
            'platform',
            'day',
            'title',
            # 'thumbnail',
            # 'detail_link',
            'introduction',
            'writer',
            'genre',
            'age',
            )
        # fields = '__all__'